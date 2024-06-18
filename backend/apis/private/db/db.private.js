const express = require("express");
const Db = require("../../../controllers/db/db");
const router = express.Router();

router.post("/create", Db.createDB);
router.get("/:id" , Db.getDatabaseData);
router.post("/:id/table", Db.getTableData);

module.exports = router;
