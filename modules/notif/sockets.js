const socketIO = require('socket.io');
const socketIOHelper = require('./helper.js');
const server = require(__base + 'system/server.js')

const io = socketIO(server);

socketIOHelper.set(io);

const receivers = require('./receivers.js');

receivers.receivers(io);
