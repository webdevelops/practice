const { Router } = require('express');
const bcrypt = require('bcrypt');
// const bcrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = Router();

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Incorrect email.').isEmail(),
    check('password', 'At least 6 characters.').isLength({ min: 6 })
  ],
  async (req, res) => {
    try {      
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
          message: 'Incorrect registration data.'
        });
      }

      const { email, password } = req.body;
      const candidate = await User.findOne({ email: email });

      if (candidate) {
        return res.status(400).json({ message: "This user already exists." });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();
      res.status(201).json({ message: "User created." });

    } catch (err) {
      res.status(500).json({ message: "Something went wrong, try again." });
    }
  });

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Incorrect email').normalizeEmail().isEmail(),
    check('password', 'Incorrect password').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
          message: 'Incorrect login data.'
        });
      }
      
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      
      if (!user) {
        return res.status(422).json({ message: 'User not found' });
      }
      
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(422).json({ message: 'Incorrect password' });
      }

      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      );

      res.json({ token, userId: user.id });

    } catch (err) {
      res.status(500).json({ message: 'Something went wrong, try again' });
    }
  });

module.exports = router;