const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const config = require("./config-env-variables");

const configMiddlewares = (server) => {
  server.use(express.json());
  server.use(morgan('common'));
  server.use(cors({ credentials: true, origin: config.client.url }));
  server.use(cookieParser())
}

module.exports = configMiddlewares;