const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5001;
const connectDb = require("./config/dbConnection");
const adminRoutes = require("./routes/adminRoutes");
const studentRoutes = require("./routes/studentRoutes");

connectDb();
app.use(cors());

app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/student", studentRoutes);

app.listen(port, () => {
  console.log(`Server conntected to port: ${port}`);
});
