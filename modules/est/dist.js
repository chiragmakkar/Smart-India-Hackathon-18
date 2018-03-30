const request = require('request')
const config = require(__base + 'system/config.js')

const getNodes = require('./trans.js')

const calcDistInMatrix = (req,res) => {
  let location = req.body.from //"Vancouver+BC|Seattle"
  let nearTrans = req.body.to //Get location of nearest khamba.
  let apiKey = config.details.api.distanceMatrix
  let url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins="+location+"&destinations="+nearTrans+"&key="+apiKey

  request(url, (error, response, body) => {
    let outObj = JSON.parse(body)
    console.log(getNodes(76,78))
    res.json({"Objects":outObj})
  })
}

module.exports = calcDistInMatrix
