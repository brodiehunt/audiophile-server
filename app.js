const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors());

const router = require("./routes");

app.use("/", router);

const { errorHandler } = require("./errorHandler");

app.use(errorHandler);

app.get("*", (req, res) => {
  res.status(404).json({
    message: "No route defined",
  });
});

module.exports = app;
