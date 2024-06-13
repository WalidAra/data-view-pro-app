const express = require("express");
const cors = require("cors");
const app = express();
const EndPointCounter = require("express-list-endpoints");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
require("dotenv").config();

app.use(cors());
const PORT = 9090;
const swaggerDocument = YAML.load("./swagger.yaml");

app.use(express.json());

const router = require("./apis/routes.js");
app.use("/api", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

console.log("====================================");
console.log("You Made", EndPointCounter(router).length, "APIS Mr.Exotic :D");
console.log("====================================");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} \nhttp://localhost:${PORT}`);
});
