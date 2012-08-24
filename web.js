var httpProxy = require('http-proxy');

var port   = process.env.PORT || 8000;

httpProxy.createServer(function (req, res, proxy) {

  if (req.url.match(/\/devices/) || req.url.match(/\/consumptions/) || req.url.match(/\/histories/)) {
    console.log(process.env.DEVICES_URI, process.env.DEVICES_PORT);
    req.headers.host = process.env.DEVICES_URI;
    proxy.proxyRequest(req, res, { port: process.env.DEVICES_PORT || 80, host: process.env.DEVICES_URI });
  }

  if (req.url.match(/\/types/) || req.url.match(/\/properties/) || req.url.match(/\/functions/) || req.url.match(/\/statuses/) || req.url.match(/\/categories/)) {
    console.log(process.env.TYPES_URI, process.env.TYPES_PORT)
    req.headers.host = process.env.TYPES_URI;
    proxy.proxyRequest(req, res, { port: process.env.TYPES_PORT || 80, host: process.env.TYPES_URI });
  }

  if (req.url.match(/\/locations/)) {
    console.log(process.env.LOCATIONS_URI, process.env.LOCATIONS_PORT)
    req.headers.host = process.env.LOCATIONS_URI;
    proxy.proxyRequest(req, res, { port: process.env.LOCATIONS_PORT || 80, host: process.env.LOCATIONS_URI });
  }

}).listen(port);

