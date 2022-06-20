require("dotenv").config();

const express = require("express");
const mysql2 = require("mysql2/promise");

const routes = require("./routes");
const dbMiddleware = require("./middleware/db");

const init = async () => {
  try {
    const PORT = process.env.PORT || 4000;

    const dbConfig = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    };

    const db = await mysql2.createConnection(dbConfig);

    const app = express();

    // add our middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(dbMiddleware(db));
    app.use(routes);

    // listen for requests
    app.listen(PORT, () => {
      console.log(`Sever running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to start server | ${error.message}`);
  }
};

init();
