const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')

/* Global Path setup for easy require */
global.__base = __dirname + '/';

const config = require(__base + 'system/config.js')
const passportSetup = require(__base + 'modules/oauth/passport-setup')

/* Mongoose connection */
mongoose.connect(config.details.database.mlab)

/* Express Instance */
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true
}))

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.set('superSecret', config.details.Secret)

/* Global Cross-Origin Access */
if(config.settings.xors) {
  app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  })
}

/* Important Page routes */
const stat = require('./routes/basic.js')
const auth = require('./routes/auth.js')
const asMat = require('./routes/assessment.js')
const conRou = require('./routes/consumer.js')
const employee = require('./routes/employee.js')
const oauth = require('./routes/oauth.js')
const balancer = require('./routes/loadBalancer.js')

/* Testing page routes */
const dummy = require('./routes/dummy.js')

/* Active Page Routes */
app.use('/',stat)
app.use('/auth',auth)
app.use('/matrix', asMat)
app.use('/connection',conRou)
app.use('/dummy', dummy)
app.use('/employee', employee)
app.use('/load', balancer)

/* oAuth configuration */
if(config.settings.oauth) {

  app.use('/oauth',oauth)
}

//let alive = require(__base + 'modules/misc/cron.js')

module.exports = app
