var nock = require('nock');
var http = require('http');
var httpProxy = require('http-proxy');

var config = {
  'devices':   'localhost:3000/devices',
  'types':     'localhost:3000/types',
  'locations': 'localhost:3000/locations'
}

var options = {
  router: {
    'localhost/devices':   config.devices,
    'localhost/types':     config.types,
    'localhost/locations': config.locations,
  }
}

var server = httpProxy.createServer(options).listen(8000);
