const jwt = require('jsonwebtoken')
const config = require(__base + 'system/config.js')
const oauthModel = require(__base + 'models/oauth.js')

const gHandler = (req,res) => {
  let user = req.user
  let filteredUser = {
    "fullName":user.fullName,
    "username":user.userName,
    "email":user.email,
    "type":user.userType,
    "oauth":true
  }
  let token = jwt.sign(filteredUser, config.details.Secret, {
     expiresIn: 86400 // expires in 24 hours
  })
  oauthModel.findOneAndUpdate({"userName": user.userName}, {$set:{token:token}}, {new: true}, (err, doc) => {
    if(err){
      console.log("Something went wrong when updating data!");
    }
  });
  res.json({
       "success": true,
       "message": 'Authenticated',
       "token": token
   })
}

module.exports = gHandler
