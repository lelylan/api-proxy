var httpProxy = require('http-proxy');

var port = process.env.PORT || 8200;

// all not found routes are forwarded to the devices service
var routing = {
  '/me':            { port: process.env.LELYLAN_PEOPLE_PORT || 80,        host: process.env.LELYLAN_PEOPLE_URL },
  '/devices':       { port: process.env.LELYLAN_DEVICES_PORT || 80,       host: process.env.LELYLAN_DEVICES_URL },
  '/activations':   { port: process.env.LELYLAN_DEVICES_PORT || 80,       host: process.env.LELYLAN_DEVICES_URL },
  '/types':         { port: process.env.LELYLAN_TYPES_PORT || 80,         host: process.env.LELYLAN_TYPES_URL },
  '/properties':    { port: process.env.LELYLAN_TYPES_PORT || 80,         host: process.env.LELYLAN_TYPES_URL },
  '/functions':     { port: process.env.LELYLAN_TYPES_PORT || 80,         host: process.env.LELYLAN_TYPES_URL },
  '/statuses':      { port: process.env.LELYLAN_TYPES_PORT || 80,         host: process.env.LELYLAN_TYPES_URL },
  '/categories':    { port: process.env.LELYLAN_TYPES_PORT || 80,         host: process.env.LELYLAN_TYPES_URL },
  '/subscriptions': { port: process.env.LELYLAN_SUBSCRIPTIONS_PORT || 80, host: process.env.LELYLAN_SUBSCRIPTIONS_URL },
}

var server = httpProxy.createServer(
  require('./lib/uri-middleware')(routing)
).listen(port);
