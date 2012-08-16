var nock    = require('nock');
var request = require('request');

describe('when requires a resource', function() {

  var host    = 'https://devices.lelylan.com';
  var path    = '/devices'
  var headers = { 'Location': 'https://devices.lelylan.com/devices/03aef92001293dfae982738' };
  var fixture = __dirname + '/fixtures/devices.json';
  var scope   = nock(host).post(path).replyWithFile(201, fixture, headers);

  it('keeps status code', function(done) { 
    request('http://localhost:9000' + path, function(error, res, body) {
      expect(res.statusCode).toEqual('201');
      done();
    });
  });

  //it('updates location header', function(done) {
    //request('http://localhost:9000' + path, function(error, response, body) {
      //console.log('YOOOOOO');
      //expect(response.getHeader('Location')).toEqual("api.lelylan.com/devices");
      //done();
    //});
  //});
});
