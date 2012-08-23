var nock = require('nock');
var http = require('http');
var httpProxy = require('http-proxy');

settings = {
  "devices":   process.env.DEVICES_URI,
  "types":     process.env.TYPES_URI,
  "locations": process.env.LOCATIONS_URI
}

var options = {
  router: {
    'localhost/devices':      settings.devices   + '/devices',
    'localhost/consumptions': settings.devices   + '/consumptions',
    'localhost/histories':    settings.devices   + '/histories',
    'localhost/types':        settings.types     + '/types',
    'localhost/properties':   settings.types     + '/properties',
    'localhost/functions':    settings.types     + '/functions',
    'localhost/statuses':     settings.types     + '/statuses',
    'localhost/categories':   settings.types     + '/categories',
    'localhost/locations':    settings.locations + '/locations',
  }
}

var port   = process.env.PORT || 8000;
var server = httpProxy.createServer(options).listen(port);
