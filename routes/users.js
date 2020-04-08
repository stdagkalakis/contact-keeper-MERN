const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route    POST api/users
// @decs     Register a user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Please add name').not().isEmpty(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    check('email', 'Please enter a valid email').isEmail(),
  ],
  async (req, res, error) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'user already exists.' });
      }
      // IEs 6 allows to do password: passoword as password
      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) {
            throw err;
          }
          console.log('In sign ' + token);
          return res.status(200).json({ token });
        }
      );

      // return res.status(200).json({ msg: 'User saved' });
    } catch (error) {
      return res.status(400).json({ errors: error.message });
    }
  }
);

module.exports = router;
