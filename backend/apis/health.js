const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    return res.status(200).json({
      message: "Server is running",
      status: true,
      data: null,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      status: false,
      data: null,
    });
  }
});

module.exports = router;
