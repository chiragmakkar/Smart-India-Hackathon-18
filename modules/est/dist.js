const request = require('request')
const config = require(__base + 'system/config.js')

const calcDistInMatrix = (req,res) => {
  let location = req.body.from //"Vancouver+BC|Seattle"
  let nearTrans = req.body.to //Get location of nearest khamba.
  let apiKey = config.details.api.distanceMatrix
  let url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins="+location+"&destinations="+nearTrans+"&key="+apiKey

  request(url, (error, response, body) => {
    let outObj = JSON.parse(body)
    res.json(outObj)
  })
}

module.exports = calcDistInMatrix
