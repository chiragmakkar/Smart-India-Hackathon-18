const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const auth = require(__base + 'modules/auth/protect.js');

//Fetch all applications
router.post('/apps', require('../modules/employee/applications'))

//Update Status
router.post('/updatestatus', require('../modules/employee/updateStatus'))

module.exports = router;
