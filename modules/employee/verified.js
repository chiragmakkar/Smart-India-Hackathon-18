const mongoose = require('mongoose')

const Consumer = require(__base + 'models/consumer.js').consumer

const verified = (req, res) => {
    Consumer.findOneAndUpdate({"ApplicationID":req.body.applicationId}, {
        $set:{
            "applicationTracking.veriFinance":true
        }
    })
}

module.exports = verified
