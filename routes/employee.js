const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const auth = require(__base + 'modules/auth/protect.js');

//Fetch all applications
router.post('/apps', auth, require('../modules/employee/applications'))

//Update Status
router.post('/updatestatus', auth, require('../modules/employee/updateStatus'))

module.exports = router;
