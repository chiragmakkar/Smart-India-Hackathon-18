const details = {
  "database":{
    "mlab":"mongodb://admin:envision@ds012168.mlab.com:12168/sih",
    "local":"mongodb://localhost:27017/Fitzgerald"
  },
  "Twilio": {
    "SID":"ACfef32ed89b6d972cd6751aa6f7d500d5",
    "Token":"2a30374e77a9c287a7f68b3bc33ed8e8",
    "Number":"+12673102643"
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
  "host":"api.nvixion.tech",
  "port":3000,
  "xors":true,
  "oauth":false,
  "verification":{
    "sms":true,
    "email":true
  },
  "salt":10
}

const oauth = {
  "facebook": {
    "key": "160775371250060",
    "secret": "86ac4ee355cceaecffd7c773a134c800",
    "callback": "http://127.0.0.1:3000/oauth/facebook/callback",
    "scope": [
      "user_groups",
      "user_likes"
    ]
  },
  "twitter": {
    "key": "upiBpP9vJXo5fPAcJAj4xmlq9",
    "secret": "XBevC2WJXz3NTyj5AhlNd0g0uRtkdwgiKNI5k1euX8l6iUMKHC",
    "callback": "http://127.0.0.1:3000/oauth/twitter/callback"
  },
  "google": {
    "key": "",
    "secret": "",
    "callback": "/oauth/google"
  }
}

const config = {
  "details":details,
  "oauth":oauth,
  "settings":settings
}

module.exports = config
