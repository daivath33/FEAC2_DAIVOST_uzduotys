const envVariables = require("./config-env-variables");
const configMiddlewares = require("./config-midlewares");
const connectToDb = require("../libs/connect-database");
const configRouter = require("./config-routes");

module.exports = {
  envVariables,
  configMiddlewares,
  connectToDb,
  configRouter,
};
