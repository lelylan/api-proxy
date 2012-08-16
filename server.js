// ----------------
// Initialization
// ----------------

http = require('http');
httpProxy = require('http-proxy');

// --------------
// Proxy server
// --------------

var options = { router: { 'api.lelylan.com/devices': 'devices.lelylan.com' } }

var proxyServer = httpProxy.createServer(function(req, res, proxy) {
  proxy.proxyRequest(req, res, options);
  console.log(reuqe)
})

proxyServer.listen(8000);


//# -------------
//# Node Server
//# -------------

var httpServer = http.createServer(function (req, res) {
  //res.writeHead(200, { 'Content-Type': 'text/plain' });
  //res.write('request successfully proxied: ' + req.url +'\n' + JSON.stringify(req.headers, true, 2));
  //res.end();

  location = response.getHeader('Location');
  if (location != null) {
    location.replace('devices.lelylan.com', 'api.lelylan.com');
    response.setHeader('Location', location);
  }
  response.end();
});

httpServer.listen(9000);
