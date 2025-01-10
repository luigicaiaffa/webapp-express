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
function show(req, res) {
  const id = parseInt(req.params.id);

  const moviesSql = `SELECT * FROM movies WHERE id = ?`;
  
  const reviewsSql = `
    SELECT 
	    reviews.id,
	    reviews.name,
        reviews.vote,
        reviews.text
    FROM reviews
    JOIN movies 
    ON movie_id = movies.id
    WHERE movie_id = ?
  `;

  connection.query(moviesSql, [id], (err, moviesResults) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database query failed" });
    }

    if (moviesResults.length === 0) {
      return res.status(404).json({ error: "Movie not found" });
    }

    const movie = moviesResults[0];

    connection.query(reviewsSql, [id], (err, reviewsResults) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Database query failed" });
      }

      movie.reviews = reviewsResults;
      res.json(movie);
    });
  });
}

// Store
function create(req, res) {}

// Update
function update(req, res) {}

// Modify
function modify(req, res) {}

// Destroy
function destroy(req, res) {}

module.exports = { index, show, create, update, modify, destroy };
