// # Configurazione
const express = require("express");
const router = express.Router();

// homepage
router.get("/", (req, res) => {
  res.json({
    status: "OK",
  });
});

module.exports = router;
