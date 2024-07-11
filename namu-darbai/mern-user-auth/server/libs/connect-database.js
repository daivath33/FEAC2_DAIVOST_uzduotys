const mongoose = require("mongoose");
const envVariables = require("../config/config-env-variables");

const connectDatabase = (serverStarter) => {
  mongoose
    .connect(envVariables.db.connection)
    .then(() => {
      console.log("Connected to MongoDB!");
    })
    .catch((err) => {
      console.log(err);
    });
  serverStarter();
};
module.exports = connectDatabase;
