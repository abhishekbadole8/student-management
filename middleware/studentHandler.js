const jwt = require("jsonwebtoken");

const studentAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization || req.headers.Authorization;

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECERT, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.studentId = decoded.id;
    next();
  });
};

module.exports = studentAuthMiddleware;
