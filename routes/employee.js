const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const config = require('../system/config')

mongoose.connect(config.mlab)

const db = mongoose.connection

db.on("error", console.error.bind(console, "connection error")); //DB Connection fail

db.once("createConnection", () => {
    console.log("MongoDB Connection Succeeded") //DB connection success
})

const auth = require(__base + 'modules/auth/protect.js');

//Fetch all applications
router.post('/apps', require('../modules/employee/applications'))

module.exports = router;


