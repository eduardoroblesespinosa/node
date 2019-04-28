
//desde aqui
const server = require('server');
const { get, socket } = server.router;
const { render } = server.reply;

// Update everyone with the current user count
const updateCounter = ctx => {
  ctx.io.emit('count', Object.keys(ctx.io.sockets.sockets).length);
};

// Send the new message to everyone
const sendMessage = ctx => {
  ctx.io.emit('message', ctx.data);
};

server([
  get('/', ctx => render('https://github.com/eduardoroblesespinosa/node/blob/master/index.html')),
  socket('connect', updateCounter),
  socket('disconnect', updateCounter),
  socket('message', sendMessage)
]);

