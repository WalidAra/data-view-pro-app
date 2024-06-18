const prisma = require("../../config/primsa");
const { Error500 } = require("../../constants");
const AES = require("../../helpers/aes.helper");
const DbHelper = require("../../helpers/db.helper");
const destructDbObj = require("../../scripts/destructDbObj");
const aes = new AES();

const Db = {
  getTableData: async (req, res) => {
    const dbID = req.params.id;
    const { tableName } = req.body;

    try {
      const entity = await prisma.database.findUnique({
        where: {
          id: dbID,
        },
      });
      const plainUri = aes.decrypt(entity.uri);
      const dbHelper = new DbHelper(plainUri);
      await dbHelper.connect();
      const data = await dbHelper.getTableData(tableName);

      res.status(200).json({
        status: true,
        message: "Got table data successfully",
        data: data,
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json(Error500);
    }
  },

  getDatabaseData: async (req, res) => {
    const dbID = req.params.id;
    try {
      const entity = await prisma.database.findUnique({
        where: {
          id: dbID,
        },
      });
      const plainUri = aes.decrypt(entity.uri);
      const dbHelper = new DbHelper(plainUri);
      await dbHelper.connect();
      const { uri, userId, ...temp } = entity;
      const tableCount = await dbHelper.getDbTableCount();
      const size = await dbHelper.getDbSize();
      const tables = await dbHelper.getTables();
      await dbHelper.disconnect();

      res.status(200).json({
        status: true,
        message: "Got database data successfully",
        data: { ...temp, tableCount, size, tables },
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json(Error500);
    }
  },

  getClientDBS: async (req, res) => {
    const { id } = req.user.id; // client id

    try {
      const dbs = await prisma.database.findMany({
        where: {
          userId: id,
        },
      });

      const result = dbs.map(async (db) => {
        const plainUri = aes.decrypt(db.uri);
        const dbHelper = new DbHelper(plainUri);
        await dbHelper.connect();

        const { uri, userId, ...temp } = db;

        const tableCount = await dbHelper.getDbTableCount();
        const size = await dbHelper.getDbSize();

        await dbHelper.disconnect();

        return { ...temp, tableCount, size };
      });

      res.status(200).json({
        status: true,
        message: "Got client databases successfully",
        data: await Promise.all(result),
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json(Error500);
    }
  },

  createDB: async (req, res) => {
    const { title, type, description, uri, name } = req.body;
    const { id } = req.user.id; // client id
    const dbHelper = new DbHelper(uri);

    try {
      await dbHelper.connect();
      const encryptedUri = aes.encrypt(uri);
      const data = {
        description,
        name,
        title,
        uri: encryptedUri,
        userId: id,
        type,
      };

      const result = await prisma.database.create({
        data: data,
      });

      const finalResult = destructDbObj(result);
      const tableCount = await dbHelper.getDbTableCount();
      const size = await dbHelper.getDbSize();

      res.status(200).json({
        status: true,
        message: "Database created successfully",
        data: { ...finalResult, size, tableCount },
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json(Error500);
    }
  },
};

module.exports = Db;
