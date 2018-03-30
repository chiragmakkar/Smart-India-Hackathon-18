const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const authModel = require(__base + 'models/auth.js')
const config = require(__base + 'system/config.js')

const app = require(__base + 'app.js')

const logoutUser = (req,res) => {
  let username = req.decoded.username;
  authModel.findOneAndUpdate({"userName": username}, {$unset: {"token": 1 }}, {new: true}, (err, doc) => {
    if(err){
      console.log("Something wrong when updating data!");
    }
    res.json({ success: true, message: 'Logged out.'})
  });
}

module.exports = logoutUser
