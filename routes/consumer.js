const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const config = require(__base + 'system/config.js')

const auth = require(__base + 'modules/auth/protect.js');

//Saving New Application Data In mongoosegoDb
router.post('/new', auth, require(__base + 'modules/forms/newCon.js'))

//My connections
router.post('/mycon', auth, require('../modules/forms/myCon'))

//Update Connection
router.post('/update', auth, require('../modules/forms/updateCon'))

//testing part
router.put('/transfer', auth, require(__base + 'modules/forms/transferCon.js'))

//for closure of connection
router.patch('/closure', auth, require(__base + 'modules/forms/closeCon.js'))

//for deleting connection
router.delete('/delete', auth, require(__base + 'modules/forms/deleteCon.js'))

module.exports = router;
