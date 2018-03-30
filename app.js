const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

/* Global Path setup for easy require */
global.__base = __dirname + '/';

const config = require(__base + 'system/config.js')

/* Mongoose connection */
mongoose.connect(config.details.database.mlab)

/* Express Instance */
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true
}))

app.set('superSecret', config.details.Secret)

/* Global Cross-Origin Access */
if(config.settings.xors) {
  app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  })
}

/* Import Page routes */
const stat = require('./routes/basic.js')
const auth = require('./routes/auth.js')
const asMat = require('./routes/assessment.js')
const conRou = require('./routes/consumer.js')
const dummy = require('./routes/dummy.js')

/* Active Page Routes */
app.use('/',stat)
app.use('/auth',auth)
app.use('/matrix', asMat)
app.use('/connection',conRou)
app.use('/dummy', dummy)


/* oAuth configuration */
if(config.settings.oauth) {
  //const oauth = require('./routes/oauth.js')
  //app.use('/oauth',oauth)
}

let alive = require(__base + 'modules/misc/cron.js')

module.exports = app
