const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth/auth.private"));
router.use("/db", require("./db/db.private"));

module.exports = router;
