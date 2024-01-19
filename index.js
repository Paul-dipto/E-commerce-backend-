const express = require("express");
require("dotenv").config();

const app = express();
const Task = require("./model/taskSchema.js");
const dbConnection = require("./config/dbConfig.js");

app.use(express.json());
dbConnection();

app.listen(8000, function () {
   console.log("done,close");
});
