// # Config
const express = require("express");
const router = express.Router();

// Homepage
router.get("/", (req, res) => {
  res.json({
    name: "movies_db",
    status: "OK",
  });
});

module.exports = router;
