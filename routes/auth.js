const express = require('express');
const router = express.Router();

// @route    GET api/auth
// @decs     Get logged in user
// @access   private
router.get('/', (req, res, error) => {
  res.status(200).json({ msg: 'Get logged in user' });
});

// @route    POST api/auth
// @decs     Auth user and get token
// @access   public
router.post('/', (req, res, error) => {
  res.status(200).json({ msg: 'Log in user' });
});

module.exports = router;
