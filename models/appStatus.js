const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const appStatus = new Schema({
    "ApplicationID":String,
    "verification":{
        "empId":String,
        "status":Boolean
    },
    "finance":{
        "empId":String,
        "status":Boolean
    },
    "technical":{
        "empId":String,
        "status":Boolean
    }
});
module.exports=mongoose.model('appStatus',appStatus);
