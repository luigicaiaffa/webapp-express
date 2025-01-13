// # Config
const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const domain = process.env.HOST_DOMAIN;
const port = process.env.HOST_PORT;

// # Middlewares
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

// # Routes
const pagesRouter = require(`./routers/pages`);
const moviesRouter = require(`./routers/movies`);

app.use(`/`, pagesRouter);
app.use(`/movies`, moviesRouter);

// # Errors
app.use(errorsHandler);
app.use(notFound);

// # Listening
app.listen(port, () => {
  console.log(`Server listening on port ${domain}:${port}`);
});
