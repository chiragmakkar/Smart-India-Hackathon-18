const config = require(__base + 'system/config.js')
const client = require('twilio')(config.details.Twilio.SID, config.details.Twilio.Token)

const sendSMS = (number, message) => {
  client.messages.create({
    to: number,
    from: config.details.Twilio.Number,
    body: message,
  }, (err, message) => {
    if(err) {
      console.log(err)
    }
    console.log("SMS sent, ID : "+message.sid);
  })
}

module.exports = sendSMS
