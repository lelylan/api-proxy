var nock = require('nock');
var http = require('http');
var httpProxy = require('http-proxy');
var settings = require('konphyg')(__dirname + '/settings')('settings');

var options = {
  router: {
    'localhost/devices':      settings.devices,
    'localhost/consumptions': settings.devices,
    'localhost/histories':    settings.devices,
    'localhost/types':        settings.types,
    'localhost/properties':   settings.types,
    'localhost/functions':    settings.types,
    'localhost/statuses':     settings.types,
    'localhost/categories':   settings.types,
    'localhost/locations':    settings.locations,
  }
}

var server = httpProxy.createServer(options).listen(8000);
