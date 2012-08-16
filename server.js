var nock = require('nock');
var http = require('http');
var httpProxy = require('http-proxy');

var options = {
  host: 'localhost', port: 3000,
  router: { 
    'localhost:8000/devices': 'http://localhost:3000'
  }
}

httpProxy.createServer(function(req, res, proxy) {
  proxy.proxyRequest(req, res, options);
}).listen(8000);
