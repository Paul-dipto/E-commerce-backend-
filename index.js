const express = require("express");
const app = express();
const Task = require("./model/taskSchema.js");
const dbConnection = require("./config/dbConfig.js");

app.use(express.json());

dbConnection();

app.listen(8000, function () {
   console.log("done,close");
});
