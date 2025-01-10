// # Config
const connection = require("../data/moviesdb");

// # Routes

// Index
function index(req, res) {
  const sql = `SELECT * FROM movies`;

  connection.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database query failed" });
    }

    res.json(results);
  });
}

// Show
function show(req, res) {}

// Store
function create(req, res) {}

// Update
function update(req, res) {}

// Modify
function modify(req, res) {}

// Destroy
function destroy(req, res) {}

module.exports = { index, show, create, update, modify, destroy };
