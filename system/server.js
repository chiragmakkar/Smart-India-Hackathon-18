const http = require('http')
const app = require('../app.js')
const config = require('./config.js')
const socketIO = require('socket.io')
const socketIOHelper = require('../modules/notif/helper.js')

const server = http.createServer(app)

const io = socketIO(server);

socketIOHelper.set(io);

const receivers = require('../modules/notif/receivers.js');

receivers.receivers(io);

const port = process.env.PORT || config.settings.port

server.listen(port, () => {
  console.log('Project active on : '+port)
})

module.exports = server;
