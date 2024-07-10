const express = require("express");
require("./config/config-env-variables");
const {
  envVariables,
  connectToDb,
  configMiddlewares,
  configRouter,
} = require("./config/index");

const server = express();

configMiddlewares(server);
configRouter(server);

connectToDb(() => {
  server.listen(envVariables.server.port, () =>
    console.log(`Server started at ${envVariables.server.port}...`)
  );
});
