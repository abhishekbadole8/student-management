const express = require("express");
const router = express.Router();

const { getAdmin, createAdmin } = require("../controllers/adminController");
const { createStudent } = require("../controllers/studentController");
const { assignTask } = require("../controllers/taskController");

const adminAuthMiddleware = require("../middleware/adminHandler");

router.post("/register", createAdmin);
router.post("/login", getAdmin);

router.post("/add-student", adminAuthMiddleware, createStudent);
router.post("/tasks/assign", adminAuthMiddleware, assignTask);

module.exports = router;