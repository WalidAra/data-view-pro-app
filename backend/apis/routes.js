const express = require("express");
const router = express.Router();

router.use("/health", require("./health"));
router.use("/public", require("./public/api.public"));
router.use("/private", require("./private/api.private"));

module.exports = router;
