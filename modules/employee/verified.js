const mongoose = require('mongoose')

const Consumer = require(__base + 'models/consumer.js').consumer

const verified = (req, res) => {
    Consumer.findOneAndUpdate({ "ApplicationID": req.body.applicationId }, {
        $set: {
            "applicationTracking":
                {
                    "num": parseInt("applicationTracking.num")+1
                }
        }, 
    }, (err, data) => {
        if (err) console.log(err)

        else{
            Consumer.findOne({ "ApplicationID": req.body.applicationId }, (err, data) => {
                if (err) console.log(err)
        
                else {
                    res.send(data)
                }
            })
        }
    })
}

module.exports = verified
