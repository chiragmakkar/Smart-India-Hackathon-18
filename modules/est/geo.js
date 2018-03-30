const request = require('request')
const config = require(__base + 'system/config.js')

const apiKey = config.details.api.geocode

const geoMatrix = (addr) => {
    var options = {
        url: "https://maps.googleapis.com/maps/api/geocode/json?address="+addr+"&key="+apiKey,
        headers: {
            'User-Agent': 'request'
        }
    }

    return new Promise((resolve, reject) => {
      request.get(options, (err, resp, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}

module.exports = geoMatrix
