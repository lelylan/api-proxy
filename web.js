var httpProxy = require('http-proxy');

var port   = process.env.PORT || 8000;

console.log(process.env.TYPES_URI);
httpProxy.createServer(3002, process.env.TYPES_URI).listen(port);
