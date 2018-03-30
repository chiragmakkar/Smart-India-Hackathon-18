const express = require('express')
const router = express.Router()

const config = require(__base + 'system/config.js')

/* Page Routes */
router.post('/node', require(__base + 'modules/dummy/enterNodes.js'))

router.get('/getNodes', require(__base + 'modules/dummy/getNodes.js'))

module.exports = router
