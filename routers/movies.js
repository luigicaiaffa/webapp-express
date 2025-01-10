// # Config
const express = require("express");
const router = express.Router();

// # Routes
const routeFunction = require("../controllers/moviescontroller");

// Index
router.get(`/`, routeFunction.index);

// Show
router.get("/:id", routeFunction.show);

// Create
router.post("/", routeFunction.create);

// Update
router.put("/:id", routeFunction.update);

// Modify
router.patch("/:id", routeFunction.modify);

// Destroy
router.delete("/:id", routeFunction.destroy);

module.exports = router;
