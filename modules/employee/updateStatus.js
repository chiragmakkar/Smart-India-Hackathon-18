const mongoose = require("mongoose")

const appStatus = require('../../models/appStatus')

const updateStatus = (req, res) => {
    if(req.body.empId){
        if(req.body.applicationId){
            if(req.body.empType == 'v'){
                let verify = new appStatus({
                    "ApplicationID":req.body.empId,
                    "verification":{
                        "empId":req.body.empId,
                        "status":req.body.status
                    },
                    "finance":{
                        "empId":"",
                        "status":false
                    },
                    "technical":{
                        "empId":"",
                        "status":false
                    }
                })
                verify.save((error) => {
                    if(error){
                        res.send(error)
                    }
                    else{
                        verify.findOne({"ApplicationID":req.body.applicationId}, (err, data) => {
                            if(err){
                                console.log(err)
                                res.send(err)
                            }
                            else{
                                res.send(data)
                            }
                        })
                    }
                })
            }
            else if(req.body.empType == 'f'){
                appStatus.findOneAndUpdate({"ApplicationID":req.body.applicationId}, {
                    $set:{
                        "finance":{
                            "empId":req.body.empId,
                            "status":req.body.status
                        }
                    }
                })
            }
            else if(req.body.empType == 't'){
                appStatus.findOneAndUpdate({"ApplicationID":req.body.applicationId}, {
                    $set:{
                        "technical":{
                            "empId":req.body.empId,
                            "status":req.body.status
                        }
                    }
                })
            }
            else{
                console.log("Wrong Employee Type!")
                res.send("Wrong Employee Type!")
            }
        }
        else{
            console.log("No Application ID specified!")
            res.send("No Application ID specified!")
        }
    }
    else{
        console.log("No Employee ID specified!")
        res.send("No Employee ID specified!")
    }
}

module.exports = updateStatus;