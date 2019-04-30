const http = require('http');
var dt = require('./modulo1');
var fs = require('fs');
const port=process.env.PORT;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.write("The date and time are currently: " + dt.myDateTime());
res.end();
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});



