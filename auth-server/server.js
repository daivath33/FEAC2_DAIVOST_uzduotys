const express = require("express");
require("./config/config-env-variables")
const { port, connectToDb, configMiddlewares, configRouter } = require("./config/index");

const server = express();

configMiddlewares(server);
configRouter(server)

connectToDb(() => {
  server.listen(port, () =>
    console.log(`Server started at port ${port}...`)
  );
});
