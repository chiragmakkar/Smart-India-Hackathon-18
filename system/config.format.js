const details = {
  "database":{
    "mlab":"",
    "local":""
  },
  "Twilio": {
    "SID":"",
    "Token":"",
    "Number":""
  },
  "Nexmo" :{
    "key":"",
    "secret":"",
    "number":""
  },
  "Secret":"",
  "Mail": {
    "host":"",
    "username":"",
    "password":""
  },
  "api":{
    "distanceMatrix":"",
    "geocode":""
  }
}

const settings = {
  "protocol":"https",
  "host":"api-egn.nvixion.tech",
  "port":3000,
  "verification":{
    "sms":true,
    "email":true
  },
  "salt":10
}

const oauth = {
  "google": {
    "clientID": '',
    "clientSecret": ''
  }
}

const config = {
  "details":details,
  "oauth":oauth,
  "settings":settings
}

module.exports = config
