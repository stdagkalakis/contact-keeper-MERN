const express = require('express');
const router = express.Router();

// @route    GET api/contacts
// @decs     Get all user contacts
// @access   Private
router.get('/', (req, res, error) => {
  res.status(200).json({ msg: 'Get all contacts' });
});

// @route    Post api/contacts
// @decs     Add new conact
// @access   Private
router.post('/', (req, res, error) => {
  res.status(200).json({ msg: 'Add contact' });
});

// @route    PUT api/contacts/:id
// @decs     Update contact
// @access   Private
router.put('/:id', (req, res, error) => {
  res.status(200).json({ msg: 'Update contact' });
});

// @route    DELETE api/contacts/:id
// @decs     Delete contact
// @access   Private
router.delete('/:id', (req, res, error) => {
  res.status(200).json({ msg: 'Delete contact' });
});

module.exports = router;
