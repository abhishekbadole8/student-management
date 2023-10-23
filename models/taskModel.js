const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDateAndTime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
