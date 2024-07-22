import express from "express";
import morgan from "morgan";
import cors from "cors";
import envVariables from "./config-env-variables";

 const configMiddlewares = (server: any) => {
  server.use(express.json());
  server.use(morgan("common"));
  server.use(cors({ credentials: true, origin: envVariables.client.url }));
};

export default configMiddlewares
