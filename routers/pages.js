// # Config
const express = require("express");
const router = express.Router();

// Homepage
router.get("/", (req, res) => {
  res.json({
    server: "movies_db",
    status: "OK",
  });
});

module.exports = router;
