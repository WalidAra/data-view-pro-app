const express = require("express");
const Auth = require("../../../controllers/auth/auth");
const router = express.Router();

router.get("/profile", Auth.Profile);

module.exports = router;
