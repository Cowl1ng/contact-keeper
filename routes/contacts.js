const express = require('express')
const router = express.Router()

// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private

router.get('/', (req, res) => {
  res.send('Get all users contacts')
})

// @route     POSST api/contacts
// @desc      Add new contact
// @access    Private

router.post('/', (req, res) => {
  res.send('Add contact')
})

// @route     PUT api/contacts/:id
// @desc      Get all users contacts
// @access    Private

router.put('/:id', (req, res) => {
  res.send('Update contact')
})

// @route     DELETE api/contacts/:id
// @desc      Delete contact
// @access    Private

router.delete('/:id', (req, res) => {
  res.send('Delete contact')
})

// Export router for use in server.js
module.exports = router
