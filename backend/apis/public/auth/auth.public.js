const express = require("express");
const Auth = require("../../../controllers/auth/auth");
const router = express.Router();

router.post("/register", Auth.Register);
router.post("/login", Auth.Login);
module.exports = router;
