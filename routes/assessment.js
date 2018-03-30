const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const config = require(__base + 'system/config.js')

/* Page Routes */
router.post('/vector', require(__base + 'modules/est/gMatrix.js'))

module.exports = router
