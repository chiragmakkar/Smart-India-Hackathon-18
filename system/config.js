const details = {
  "database":{
    "mlab":"mongodb://admin:envision@ds012168.mlab.com:12168/sih",
    "local":"mongodb://localhost:27017/Fitzgerald"
  },
  "Twilio": {
    "SID":"ACd6f65cc911fcdc962f135329daae28db",
    "Token":"3f1c2754f33f92a54a10c96401cc0e40",
    "Number":"+19493046593"
  },
  "Nexmo" :{
    "key":"bf385b2e",
    "secret":"uQDLCe21QjG0ZYVg",
    "number":"NEXMO"
  },
  "Secret":"Fitzgerald!@33Prime",
  "Mail": {
    "host":"gmail",
    "username":"pietraman@piet.co.in",
    "password":"hackraman"
  },
  "api":{
    "distanceMatrix":"AIzaSyDlkERm_ilKJsGr_Dp-AjQxLXSSZYt0VKM",
    "geocode":"AIzaSyAKajCsodID61vRw8fzivOmuIQfYn1KYaE"
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
    "clientID": '633810201853-gr3g2ajr4fdhbee4a23r5j99hql4vpkv.apps.googleusercontent.com',
    "clientSecret": 'R0tkBMtw0b_Qi8-UTs9sXgui'
  }
}

const config = {
  "details":details,
  "oauth":oauth,
  "settings":settings
}

module.exports = config
