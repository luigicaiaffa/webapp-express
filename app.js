// # Config
const express = require("express");
const app = express();
const domain = `localhost`;
const port = 3000;

// # Middlewares
app.use(express.static("public"));
app.use(express.json());

// # Routes
const pagesRouter = require(`./routers/pages`);
const moviesRouter = require(`./routers/movies`);

app.use(`/`, pagesRouter);
app.use(`/movies`, moviesRouter);

// # Listening
app.listen(port, () => {
  console.log(`Server listening on port ${domain}:${port}`);
});
