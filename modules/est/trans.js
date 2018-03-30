const mongoose = require('mongoose')
const nodes = require(__base + 'models/nodes.js')

const getNodes = (x,y) => {
    nodes.find({}, (err,data) => {
      if(err) {
        return err
      }
      else {
        return data
      }
    })
}

module.exports = getNodes
