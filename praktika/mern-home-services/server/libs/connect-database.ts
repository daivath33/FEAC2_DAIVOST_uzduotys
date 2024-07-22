import mongoose from "mongoose";
import envVariables from "../config/config-env-variables";

const connectDatabase = (serverStarter: () => void): void => {
  mongoose
    .connect(envVariables.db.connection)
    .then(() => {
      console.log("Connected to MongoDB!");
    })
    .catch((err: Error) => {
      console.log(err);
    });
  serverStarter();
};

export default connectDatabase;
