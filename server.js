var nock = require('nock');
var http = require('http');
var httpProxy = require('http-proxy');

var options = {
  router: {
    'localhost/devices':   'localhost:3000/devices',
    'localhost/types':     'localhost:3001/types',
    'localhost/locations': 'localhost:3002/locations',
  }
}

var server = httpProxy.createServer(options).listen(8000);
