import express, { Application } from 'express';
import "./config/config-env-variables";
import { envVariables, configMiddlewares, connectToDb, configRouter } from "./config/index";

const server: Application = express();

configMiddlewares(server);
configRouter(server);

connectToDb(() => {
  server.listen(envVariables.server.port, () =>
    console.log(`Server started at ${envVariables.server.port}...`)
  );
});
