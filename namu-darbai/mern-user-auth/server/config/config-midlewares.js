const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config-env-variables");

const configMiddlewares = (server) => {
  server.use(express.json());
  server.use(morgan("common"));
  server.use(cors());
};

module.exports = configMiddlewares;
