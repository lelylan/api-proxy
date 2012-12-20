var httpProxy = require('http-proxy');

var port = process.env.PORT || 8000;

// all not found routes are forwarded to the devices service
var routing = {
  '/me':            { port: process.env.PEOPLE_PORT || 80,        host: process.env.PEOPLE_URI },
  '/devices':       { port: process.env.DEVICES_PORT || 80,       host: process.env.DEVICES_URI },
  '/consumptions':  { port: process.env.DEVICES_PORT || 80,       host: process.env.DEVICES_URI },
  '/histories':     { port: process.env.DEVICES_PORT || 80,       host: process.env.DEVICES_URI },
  '/activations':   { port: process.env.DEVICES_PORT || 80,       host: process.env.DEVICES_URI },
  '/types':         { port: process.env.TYPES_PORT || 80,         host: process.env.TYPES_URI },
  '/properties':    { port: process.env.TYPES_PORT || 80,         host: process.env.TYPES_URI },
  '/functions':     { port: process.env.TYPES_PORT || 80,         host: process.env.TYPES_URI },
  '/statuses':      { port: process.env.TYPES_PORT || 80,         host: process.env.TYPES_URI },
  '/locations':     { port: process.env.LOCATIONS_PORT || 80,     host: process.env.LOCATIONS_URI },
  '/subscriptions': { port: process.env.SUBSCRIPTIONS_PORT || 80, host: process.env.SUBSCRIPTIONS_URI },
}

var server = httpProxy.createServer(
  require('./lib/uri-middleware')(routing)
).listen(port);
