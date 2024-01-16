const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

const router = require("./routes");

app.use("/", router);

const { errorHandler } = require("./errorHandler");

app.use(errorHandler);

module.exports = app;
