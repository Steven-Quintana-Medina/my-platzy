const express = require("express");
const cors = require("cors");
const config = require("config");
const routes = require("./routes");

const { error404Handler, errorHandler } = require("./middleware");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/" + config.get("server.api_version"), routes);
app.use(error404Handler);
app.use(errorHandler);

module.exports = app;
