// import express
const express = require("express");

const routes = require("./routes");

// declare a PORT
const PORT = process.env.PORT || 4000;

// create a app instance using express
const app = express();

// add our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// listen for requests
app.listen(PORT, () => {
  console.log(`Sever running on http://localhost:${PORT}`);
});
