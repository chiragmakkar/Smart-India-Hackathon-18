var mongoose = require('mongoose');
var schema = mongoose.Schema

var oauth = new schema({
    "fullName":String,
    "userName":String,
    "email":String,
    "token":String,
    "userType":String
})

module.exports = mongoose.model('oAuth',oauth)
