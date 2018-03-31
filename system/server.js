const http = require('http')
const app = require('../app.js')
const config = require('./config.js')

const server = http.createServer(app)

const port = process.env.PORT || config.settings.port

server.listen(port, () => {
  console.log('Project active on : '+port)
})

module.exports = server;
