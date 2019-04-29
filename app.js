const http = require('http');
const port=process.env.PORT;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
//res.end('<h1>Hello World</h1>');
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
const get = server.router;
const socket = server.router;
const renede = server.reply;
const updateCounter = ctx => {
  ctx.io.emit('count', Object.keys(ctx.io.sockets.sockets).length);
};
server([
  // For the initial load render the index.html
  get('/', ctx => render('index.html')),


