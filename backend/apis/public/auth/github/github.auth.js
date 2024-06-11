const express = require("express");
const Github = require("../../../../controllers/auth/github");
const router = express.Router();

router.get("/redirect", Github.Redirect);
router.get("/callback", Github.Callback);

module.exports = router;