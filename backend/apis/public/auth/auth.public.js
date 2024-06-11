const express = require("express");
const Auth = require("../../../controllers/auth/auth");
const router = express.Router();

router.post("/register", Auth.Register);
router.post("/login", Auth.Login);
router.use("/github", require("./github/github.auth"));

module.exports = router;
