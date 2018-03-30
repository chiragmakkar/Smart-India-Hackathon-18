const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const config = require(__base + 'system/config.js')

mongoose.connect(config.mlab)

const db = mongoose.connection

db.on("error", console.error.bind(console, "connection error")); //DB Connection fail

db.once("createConnection", () => {
    console.log("MongoDB Connection Succeeded") //DB connection success
})

//Saving New Application Data In mongoosegoDb
router.post('/new', require(__base + 'modules/forms/newCon.js'))

//testing part
router.put('/transfer', require(__base + 'modules/forms/transferCon.js'))

//for closure of connection
router.patch('/closure', require(__base + 'modules/forms/closeCon.js'))

//for deleting connection
router.delete('/delete', require(__base + 'modules/forms/deleteCon.js'))

module.exports = router;
