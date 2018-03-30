const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const config = require(__base + 'system/config.js')

/* Page Routes */
router.get('/',(req,res) => {
  let output = {
    "message":"Welcome to Energion by ENV!$!ON."
  }
  res.json(output)
})

module.exports = router
