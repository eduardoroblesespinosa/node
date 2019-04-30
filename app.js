const http = require('http');
//var express = require('express');
//var dt = require('./style.css');
//var dt = require('./modulo1');
var fs = require('fs');
const port=process.env.PORT;
const server = http.createServer((req, res) => {
fs.readFile('./index.html', function(err, data) {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.write(data);
res.end();
});
  });
  
server.listen(port,() => {
console.log(`Server running at port `+port);
});



