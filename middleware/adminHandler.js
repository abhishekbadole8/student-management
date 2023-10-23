const Admin = require('../models/adminModel'); 
const jwt = require('jsonwebtoken');

const adminAuthMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization || req.headers.Authorization; 

    if (!token) {
      return res.status(401).json({ message: 'Authorization token is missing' });
    }

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECERT); 
    } catch (error) {
      return res.status(401).json({ message: 'Token is not valid or expired' });
    }

    const userId = decodedToken.id;

    const admin = await Admin.findById(userId);

    if (admin) {
      next();
    } else {
      res.status(403).json({ message: 'Permission denied. Admin access required.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = adminAuthMiddleware;
