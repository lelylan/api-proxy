// ----------------
// Initialization
// ----------------
var nock = require('nock');
var http = require('http');
var httpProxy = require('http-proxy');

// --------------
// Proxy server
// --------------

var options = { router: { 'http://localhost:9000/devices': 'devices.lelylan.com' } }

var proxyServer = httpProxy.createServer(function(req, res, proxy) {
  proxy.proxyRequest(req, res, options);
}).listen(8000);


// -------------
// Node Server
// -------------

var httpServer = http.createServer(function (req, res) {
  //res.writeHead(200, { 'Content-Type': 'text/plain' });
  //res.write('request successfully proxied: ' + req.url +'\n' + JSON.stringify(req.headers, true, 2));
  //res.end();

  parseLocationHeader(res);
  res.end();
}).listen(9000);


// ----------------
// Helper Methods
// ----------------

function parseLocationHeader(res) {
  console.log(res.statusCode)
  location = res.getHeader('Location');
  console.log(location);
  if (location != null) {
    location.replace('devices.lelylan.com', 'api.lelylan.com');
    res.setHeader('Location', location);
    console.log(res.getHeader('Location'))
  }
}
