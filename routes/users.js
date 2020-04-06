const express = require('express');
const router = express.Router();

// @route    POST api/users
// @decs     Register a user
// @access   Public
router.post('/', (req, res, error) => {
  res.status(200).json({ msg: 'Register a user' });
});

module.exports = router;
