// import express
const express = require("express");

// declare a PORT
const PORT = process.env.PORT || 4000;

// create a app instance using express
const app = express();

const foo = (req, res, next) => {
  req.foo = "bar";

  next();
};

// add our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(foo);

app.get("/", (req, res) => {
  console.log(req.foo);
  res.send("hello");
});

// listen for requests
app.listen(PORT, () => {
  console.log(`Sever running on http://localhost:${PORT}`);
});
