const express = require("express");
const mysql2 = require("mysql2/promise");

const routes = require("./routes");
const dbMiddleware = require("./middleware/db");

const init = async () => {
  try {
    const PORT = process.env.PORT || 4000;

    const dbConfig = {
      host: "localhost",
      user: "root",
      password: "password",
      database: "weather_journal_db",
    };

    // connect DB
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
