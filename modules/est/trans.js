const mongoose = require('mongoose')
const nodes = require(__base + 'models/nodes.js')

const rad = require(__base + 'modules/misc/rad.js')

const geo = require('./geo.js')
const dist = require('./dist.js')

const getEstimation = (req,res) => {
    let co = geo(req.body.address)
    co.then((out) => {
        let co = out.results[0].geometry.location
        let req_capacity = 300
        let allowedNodes = []

        nodes.find({}, (err,data) => {
          if(err) {
            return err
          }
          else {
            data.forEach((e) => {
              if(rad(co.lat,co.lng,e.location.lattitude,e.location.longitude) <= 10000) {
                if((e.maxCapacity - e.currentCapacity) > req_capacity) {
                  allowedNodes.push(e)
                }
              }
            })

            var maxNode = allowedNodes[0]

            var initDist = rad(co.lat,co.lng,maxNode.location.lattitude,maxNode.location.longitude)

            var estimate = 2500+(maxNode.rate*initDist*1000);

            allowedNodes.forEach((e) => {

              let dist = rad(co.lat,co.lng,e.location.lattitude,e.location.longitude)
              let currEstimate = 2500+(e.rate*dist*1000);

              if(currEstimate < estimate) {
                maxNode = e
                estimate = dist*rate
              }
            })
            let final = {
              "coordinates":{
                "transformer":{
                  "lat":maxNode.location.lattitude,
                  "lng":maxNode.location.longitude
                },
                "customer":{
                  "lat":co.lat,
                  "lng":co.lng
                }
              },
              "estimatedCost":parseInt(estimate),
              "requiredQuantity":req_capacity,
              "provider":maxNode.provider
            }
            res.json(final)
          }
        })
    }, (err) => {
        console.log(err);
    })
}

module.exports = getEstimation
