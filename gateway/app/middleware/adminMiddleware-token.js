const jwt = require('jsonwebtoken');
require('dotenv').config();

const adminMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userRole = decodedToken.role;

    if (userRole === 'ROLE_ADMIN') {
      next();
    } else {
      res.status(403).json({ error: 'Access denied' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message + " ok" + process.env.SECRET_KEY });
  }
};

module.exports = adminMiddleware;