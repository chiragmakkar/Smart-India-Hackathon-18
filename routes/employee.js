const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const config = require('../system/config')

const auth = require(__base + 'modules/auth/protect.js');

//Fetch all applications
router.post('/apps', require('../modules/employee/applications'))

module.exports = router;
