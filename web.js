var nock = require('nock');
var http = require('http');
var httpProxy = require('http-proxy');

settings = {
  "devices":   process.env.DEVICES_URI,
  "types":     process.env.TYPES_URI,
  "locations": process.env.LOCATIONS_URI,
  "localhost": process.env.LOCALHOST
}

var options = { router: { } }

console.log(settings);

options.router[settings.localhost + '/devices']      = settings.devices   + '/devices';
options.router[settings.localhost + '/consumptions'] = settings.devices   + '/consumptions';
options.router[settings.localhost + '/histories']    = settings.devices   + '/histories';
options.router[settings.localhost + '/types']        = settings.types     + '/types';
options.router[settings.localhost + '/properties']   = settings.types     + '/properties';
options.router[settings.localhost + '/functions']    = settings.types     + '/functions';
options.router[settings.localhost + '/statuses']     = settings.types     + '/statuses';
options.router[settings.localhost + '/categories']   = settings.types     + '/categories';
options.router[settings.localhost + '/locations']    = settings.locations + '/locations';

var port   = process.env.PORT || 8000;
var server = httpProxy.createServer(options).listen(port);
