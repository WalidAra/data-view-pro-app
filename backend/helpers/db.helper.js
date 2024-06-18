const { Client: PGClient } = require("pg");
const mysql = require("mysql2/promise");
const { MongoClient } = require("mongodb");

class DbHelper {
  constructor(uri) {
    this.uri = uri;
    this.sslOptions = this.determineSslOptions();
  }

  determineSslOptions() {
    if (this.uri.startsWith("postgres://")) {
      // PostgreSQL SSL options
      return {
        ssl: {
          rejectUnauthorized: true, // Adjust based on your PostgreSQL SSL configuration
          // Additional PostgreSQL SSL options like ca, cert, key can be added here
        },
      };
    } else if (
      this.uri.startsWith("mysql://") ||
      this.uri.startsWith("mysql2://")
    ) {
      // MySQL SSL options (if applicable)
      return {
        // MySQL SSL options like ca, cert, key can be added here
      };
    } else if (this.uri.startsWith("mongodb://")) {
      // MongoDB SSL options
      return {
        ssl: true, // Enable SSL for MongoDB
        sslValidate: true, // Validate SSL certificates
        // Additional MongoDB SSL options like sslCA, sslKey, sslCert can be added here
      };
    } else {
      throw new Error("Unsupported database type or URI");
    }
  }

  async connect() {
    try {
      if (
        !this.uri.startsWith("postgres://") &&
        !this.uri.startsWith("mysql://") &&
        !this.uri.startsWith("mysql2://") &&
        !this.uri.startsWith("mongodb://")
      ) {
        throw new Error("Unsupported database URI");
      }

      if (this.uri.startsWith("postgres://")) {
        const pgConfig = {
          connectionString: this.uri,
          ...this.sslOptions,
        };
        this.client = new PGClient(pgConfig);
        await this.client.connect();
      } else if (
        this.uri.startsWith("mysql://") ||
        this.uri.startsWith("mysql2://")
      ) {
        const mysqlUri = this.uri.replace("mysql://", "mysql2://");
        const mysqlConfig = {
          connectionString: mysqlUri,
          ...this.sslOptions,
        };
        this.client = await mysql.createConnection(mysqlConfig);
      } else if (this.uri.startsWith("mongodb://")) {
        const mongoConfig = {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          ...this.sslOptions,
        };
        this.client = new MongoClient(this.uri, mongoConfig);
        await this.client.connect();
      } else {
        throw new Error("Unsupported database type or URI");
      }
    } catch (error) {
      throw error;
    }
  }

  async disconnect() {
    try {
      if (!this.client) {
        return;
      }

      if (this.uri.startsWith("postgres://")) {
        await this.client.end();
      } else if (
        this.uri.startsWith("mysql://") ||
        this.uri.startsWith("mysql2://")
      ) {
        await this.client.end();
      } else if (this.uri.startsWith("mongodb://")) {
        await this.client.close();
      } else {
        throw new Error("Unsupported database type or URI");
      }

      this.client = null;
    } catch (error) {
      console.error(`Error disconnecting from ${this.uri}:`, error);
      throw error;
    }
  }

  async getDbTableCount() {
    try {
      if (!this.client) {
        throw new Error("Database client not connected");
      }

      if (this.uri.startsWith("postgres://")) {
        const result = await this.client.query(`
          SELECT count(*) AS table_count
          FROM information_schema.tables
          WHERE table_schema = 'public';
        `);
        return result.rows[0].table_count;
      } else if (
        this.uri.startsWith("mysql://") ||
        this.uri.startsWith("mysql2://")
      ) {
        const [rows] = await this.client.execute("SHOW TABLES");
        return rows.length;
      } else if (this.uri.startsWith("mongodb://")) {
        const db = this.client.db();
        const collections = await db.listCollections().toArray();
        return collections.length;
      } else {
        throw new Error("Unsupported database type or URI");
      }
    } catch (error) {
      throw error;
    }
  }

  async getDbSize() {
    try {
      if (!this.client) {
        throw new Error("Database client not connected");
      }

      if (this.uri.startsWith("postgres://")) {
        const result = await this.client.query(`
          SELECT pg_size_pretty(pg_database_size(current_database())) AS db_size;
        `);
        return result.rows[0].db_size;
      } else if (
        this.uri.startsWith("mysql://") ||
        this.uri.startsWith("mysql2://")
      ) {
        return "N/A"; // MySQL does not have a direct function to get database size easily
      } else if (this.uri.startsWith("mongodb://")) {
        const db = this.client.db();
        const stats = await db.command({ dbStats: 1 });
        return stats.dataSize;
      } else {
        throw new Error("Unsupported database type or URI");
      }
    } catch (error) {
      throw error;
    }
  }

  async getTables() {
    try {
      if (!this.client) {
        throw new Error("Database client not connected");
      }

      if (this.uri.startsWith("postgres://")) {
        const result = await this.client.query(`
          SELECT table_name
          FROM information_schema.tables
          WHERE table_schema = 'public';
        `);
        return result.rows.map((row) => row.table_name);
      } else if (
        this.uri.startsWith("mysql://") ||
        this.uri.startsWith("mysql2://")
      ) {
        const [rows] = await this.client.execute("SHOW TABLES");
        return rows.map((row) => Object.values(row)[0]);
      } else if (this.uri.startsWith("mongodb://")) {
        const db = this.client.db();
        const collections = await db.listCollections().toArray();
        return collections.map((collection) => collection.name);
      } else {
        throw new Error("Unsupported database type or URI");
      }
    } catch (error) {
      throw error;
    }
  }

  async getTableData(tableName) {
    try {
      if (!this.client) {
        throw new Error("Database client not connected");
      }

      if (this.uri.startsWith("postgres://")) {
        const columnsResult = await this.client.query(
          `
          SELECT column_name, data_type
          FROM information_schema.columns
          WHERE table_name = $1;
        `,
          [tableName]
        );

        const rowsResult = await this.client.query(
          `SELECT * FROM "${tableName}";`
        );

        // Format rows into an object where each key is a column name
        const formattedRows = rowsResult.rows.reduce((acc, row) => {
          columnsResult.rows.forEach((column) => {
            if (!acc[column.column_name]) {
              acc[column.column_name] = [];
            }
            acc[column.column_name].push(row[column.column_name]);
          });
          return acc;
        }, {});

        return {
          columns: columnsResult.rows.map((c) => c.column_name),
          rows: Array.isArray(formattedRows)
            ? formattedRows
            : Object.values(formattedRows),
        };
      } else if (
        this.uri.startsWith("mysql://") ||
        this.uri.startsWith("mysql2://")
      ) {
        const [columnsResult] = await this.client.execute(
          `
          SELECT COLUMN_NAME, DATA_TYPE
          FROM INFORMATION_SCHEMA.COLUMNS
          WHERE TABLE_NAME = ?
        `,
          [tableName]
        );

        const [rowsResult] = await this.client.execute(
          `SELECT * FROM ${tableName};`
        );

        // Format rows into an object where each key is a column name
        const formattedRows = rowsResult.map((row) => {
          const formattedRow = {};
          columnsResult.forEach((column) => {
            formattedRow[column.COLUMN_NAME] = row[column.COLUMN_NAME];
          });
          return formattedRow;
        });

        return {
          columns: columnsResult.map((c) => c.COLUMN_NAME),
          rows: formattedRows,
        };
      } else if (this.uri.startsWith("mongodb://")) {
        const db = this.client.db();
        const collection = db.collection(tableName);
        const rows = await collection.find().toArray();

        const columns =
          rows.length > 0
            ? Object.keys(rows[0]).map((key) => ({
                column_name: key,
                data_type: typeof rows[0][key],
              }))
            : [];

        return {
          columns: columns.map((c) => c.column_name),
          rows: rows,
        };
      } else {
        throw new Error("Unsupported database type or URI");
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DbHelper;
