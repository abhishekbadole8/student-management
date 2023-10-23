const Student = require("../models/studentModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Function to create a new student
const createStudent = async (req, res) => {
  try {
    const { name, email, department, password } = req.body;

    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      return res
        .status(400)
        .json({ message: "Student with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      name,
      email,
      department,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Student created successfully", student });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Function to get a list of all students
const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(401).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, student.password);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ message: "User login failed - Incorrect password" });
    }

    const token = jwt.sign(
      { id: student._id, name: student.name, email: student.email },
      process.env.ACCESS_TOKEN_SECERT,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ message: "User login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createStudent, loginStudent };
