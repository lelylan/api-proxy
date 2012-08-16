var nock = require('nock');
var http = require('http');
var httpProxy = require('http-proxy');

var config = {
  'devices':   'localhost:3000/devices',
  'types':     'localhost:3001/types',
  'locations': 'localhost:3002/locations'
}

var options = {
  router: {
    'localhost/devices':      config.devices,
    'localhost/consumptions': config.devices,
    'localhost/histories':    config.devices,
    'localhost/types':        config.types,
    'localhost/properties':   config.types,
    'localhost/functions':    config.types,
    'localhost/statuses':     config.types,
    'localhost/categories':   config.types,
    'localhost/locations':    config.locations,
  }
}

var server = httpProxy.createServer(options).listen(8000);
