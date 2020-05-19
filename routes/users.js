const express = require('express')
const router = express.Router()

// @route     POST api/users
// @desc      Regisster a user
// @access    Public

router.post('/', (req, res) => {
  res.send('Register a user')
})

// Export router for use in server.js
module.exports = router
