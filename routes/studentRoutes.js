const express = require("express");
const router = express.Router();
const { loginStudent } = require("../controllers/studentController");
const {
  getTasks,
  getTask,
  updateTask,
} = require("../controllers/taskController");
const studentAuthMiddleware = require("../middleware/studentHandler");

router.post("/login", loginStudent);
router.get("/tasks", studentAuthMiddleware, getTasks);
router.get("/tasks/:taskId", studentAuthMiddleware, getTask);
router.patch("/update-task-status/:taskId", studentAuthMiddleware, updateTask);

module.exports = router;
