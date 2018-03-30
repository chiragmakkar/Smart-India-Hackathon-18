const mongoose = require('mongoose')
const nodes = require(__base + 'models/nodes.js')

const rad = require(__base + 'modules/misc/rad.js')

const geo = require('./geo.js')
const dist = require('./dist.js')

const getEstimation = (req,res) => {
    let co = geo(req.body.address)
    co.then((out) => {
        let co = out.results[0].geometry.location
        let allowedNodes = []
        var ec = 0

        nodes.find({}, (err,data) => {
          if(err) {
            return err
          }
          else {
            data.forEach((e) => {
              if(rad(co.lat,co.lng,e.location.lattitude,e.location.longitude) <= 100) {
                if(e.currentCapacity <= (70/100)*e.maxCapacity) {
                  allowedNodes.push(e)
                }
                else {
                  ec = 1
                  return;
                }
              }
              else {
                ec = 2
                return;
              }
            })

            var minNode = allowedNodes[0]
            var finalEst

            var initDist = rad(co.lat,co.lng,minNode.location.lattitude,minNode.location.longitude)
            var initEst = 2500+(minNode.rate*initDist*1000)

            allowedNodes.forEach((elem) => {

              var currDist = rad(co.lat,co.lng,elem.location.lattitude,elem.location.longitude)
              var currEst = 2500+(elem.rate*currDist*1000)

              if(currEst <= initEst) {
                minNode = elem
                finalEst = currEst
              }

            })

            var final = {
              "coordinates":{
                "transformer":{
                  "lat":minNode.location.lattitude,
                  "lng":minNode.location.longitude
                },
                "customer":{
                  "lat":co.lat,
                  "lng":co.lng
                }
              },
              "estimatedCost":parseInt(finalEst),
              "freeCapacity":minNode.maxCapacity-minNode.currentCapacity,
              "provider":minNode.provider
            }
            if(!allowedNodes) {
                res.json({"error":"No nodes found within 1KM.","code":ec})
            }
            else {
                res.json(final)
            }

          }
        })
    }, (err) => {
        console.log(err);
    })
}

module.exports = getEstimation
