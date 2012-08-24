var httpProxy = require('http-proxy');

var port   = process.env.PORT || 8000;

console.log(process.env.TYPES_URI);

httpProxy.createServer(function (req, res, proxy) {
  //req.headers.host = process.env.TYPES_URI;
  proxy.proxyRequest(req, res, { port: process.env.TYPES_PORT, host: process.env.TYPES_URI });
}).listen(port);

