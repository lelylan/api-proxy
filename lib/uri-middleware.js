function matcher (url, dest) {
  // First, turn the URL into a regex.
  // NOTE: Turning user input directly into a Regular Expression is NOT SAFE.
  var r = new RegExp(url.replace(/\//, '\\/'));
  // This next block of code may look a little confusing.
  // It returns a closure (anonymous function) for each URL to be matched,
  // storing them in an array - on each request, if the URL matches one that has
  // a function stored for it, the function will be called.
  return function (url) {
    var m = r.exec(url)
    if (!m) {
      return;
    }
    // keep the path as we want to change only the domain
    var path = url;
    //console.log('proxy:', url, '->', dest);
    return {url: path, dest: dest};
  }
}

module.exports = function (urls) {
  // This is the entry point for our middleware.
  // 'matchers' is the array of URL matchers, as mentioned above.
  var matchers = [];
  for (var url in urls) {
    // Call the 'matcher' function above, and store the resulting closure.
    matchers.push(matcher(url, urls[url]));
  }

  // This closure is returned as the request handler.
  return function (req, res, next) {
    //
    // in node-http-proxy middlewares, `proxy` is the prototype of `next`
    // (this means node-http-proxy middlewares support both the connect API (req, res, next)
    // and the node-http-proxy API (req, res, proxy)
    //
    var proxy = next;
    for (var k in matchers) {
      // for each URL matcher, try the request's URL.
      var m = matchers[k](req.url);
      // If it's a match:
      if (m) {
        // Replace the local URL with the destination URL.
        req.url = m.url;
        // If routing to a server on another domain, the hostname in the request must be changed.
        req.headers['x-host'] = process.env.LELYLAN_PROXY_URL;
        req.headers.host = m.dest.host;
        // Once any changes are taken care of, this line makes the magic happen.
        return proxy.proxyRequest(req, res, m.dest);
      }
    }

    // default redirect when no routes matches
    // TODO refactor this part of code as it is duplicated
    var m = { url: '/devices', dest: { port: process.env.LELYLAN_DEVICES_PORT || 80,  host: process.env.LELYLAN_DEVICES_URL } }
    req.url = m.url;
    req.headers['x-host'] = process.env.LELYLAN_PROXY_URL;
    req.headers.host = m.dest.host;
    return proxy.proxyRequest(req, res, m.dest);

    // TODO use it if you want to use other middlewares
    //next() //if there was no matching rule, fall back to next middleware.
  }
}
