const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskSchema = new Schema({
   title: {
      type: String,
      required: true,
   },
   priorty: {
      type: String,
      enum: ["high", "medium", "low"],
      required: true,
   },
});

module.exports = mongoose.model("Task", taskSchema);
