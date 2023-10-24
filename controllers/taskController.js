const Task = require("../models/taskModel");
const Student = require("../models/studentModel");

// Create a new task
const assignTask = async (req, res) => {
  try {
    const { description, dueDateAndTime, department } = req.body;

    const studentsInDepartment = await Student.find({ department });

    if (studentsInDepartment.length === 0) {
      return res
        .status(400)
        .json({ message: "No students found in the department" });
    }

    const tasks = studentsInDepartment.map((student) => {
      return new Task({
        department,
        description,
        dueDateAndTime,
        student: student._id,
      });
    });

    await Task.insertMany(tasks);
    
    res.status(201).json({ message: "Tasks assigned successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get a tasks - studentId
const getTasks = async (req, res) => {
  try {
    const studentId = req.studentId;

    const tasks = await Task.find({ student: studentId });
    res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get a task - studentId
const getTask = async (req, res) => {
  try {
    const studentId = req.studentId;
    const { taskId } = req.params;

    // Find the task by its ID
    const task = await Task.findOne({ _id: taskId, student: studentId });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get a task - studentId
const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      {
        status,
      },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (updatedTask.student.toString() !== req.studentId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    res
      .status(200)
      .json({ message: "Task updated successfully", task: updatedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { assignTask, getTasks, getTask, updateTask };
