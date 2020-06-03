const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    token = req.headers.authorization.split(' ')[1]; // "Bearer Token"

    if (!token) {
      return res.status(401).json({ message: 'No authorization' });
    }

    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded;
    next();

  } catch (err) {
    res.status(401).json({ message: 'No authorization' });
  }
}