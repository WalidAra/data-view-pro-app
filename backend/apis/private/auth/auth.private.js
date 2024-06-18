const express = require("express");
const { Profile } = require("../../../controllers/auth/auth");
const { getClientDBS } = require("../../../controllers/db/db");
const router = express.Router();

router.get("/profile", Profile);
router.get("/my-dbs", getClientDBS);

module.exports = router;
