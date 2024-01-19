const mongoose = require("mongoose");

function dbConnection() {
   mongoose
      .connect(
         "mongodb+srv://abhinashpaul:aditi017@cluster0.bo5wmo1.mongodb.net/E-commerce?retryWrites=true&w=majority"
      )
      .then(() => console.log("Database-Connected!"));
}

module.exports = dbConnection;
