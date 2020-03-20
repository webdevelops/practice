const jwt = require('jsonwebtoken');
const config = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req.headers.authorization.splite(' ')[1];  // "Bearer TOKEN"

    if (!token) {
      return res.status(401).json({ message: 'No authorization' });
    }

    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded;
    next();

  } catch (err) {
    res.status(401).json({ message: 'No authorization' });
  }
};