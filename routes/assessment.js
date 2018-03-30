const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const config = require(__base + 'system/config.js')

/* Page Routes */
router.post('/est', require(__base + 'modules/est/trans.js'))

module.exports = router
