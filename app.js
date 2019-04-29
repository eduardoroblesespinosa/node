const server = require('server');
const get = server.router;
const socket = server.router;
const renede = server.reply;
const updateCounter = ctx => {
  ctx.io.emit('count', Object.keys(ctx.io.sockets.sockets).length);
};


