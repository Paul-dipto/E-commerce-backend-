const mongoose = require("mongoose");

let { USER_NAME, USER_PASSWORD, PROJECT_NAME } = process.env;

function dbConnection() {
   mongoose
      .connect(
         `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@cluster0.bo5wmo1.mongodb.net/${PROJECT_NAME}?retryWrites=true&w=majority`
      )
      .then(() => console.log("Database-Connected!"));
}

module.exports = dbConnection;
