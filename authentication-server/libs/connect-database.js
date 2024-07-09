const mongoose = require("mongoose");
const config = require("../config/config-env-variables");

const connectDatabase = (serverStarter) => {
  mongoose
    .connect(config.db.connection)
    .then(() => {
      console.log("Connected to MongoDB!");
    })
    .catch((err) => {
      console.log(err);
    });
  serverStarter();
};
module.exports = connectDatabase;
