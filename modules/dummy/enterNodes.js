const mongoose = require('mongoose')
const nodeModel = require(__base + 'models/nodes.js')

const inputNodes = (req,res) => {
  let newNode = new nodeModel({
    "location":{
      "lattitude":req.body.lat,
      "longitude":req.body.lon
    },
    "maxCapacity":req.body.mc,
    "currentCapacity":req.body.cc
  })
  newNode.save((err,data) => {
    if(err) {
      res.status(500).json({
        "error":err
      })
    }
    else {
      res.json({"message":"Dummy node saved successfully."})
    }
  })
}

module.exports = inputNodes
