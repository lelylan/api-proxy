var nock    = require('nock');
var request = require('request');

describe('when requires a resource', function() {

  var host    = 'http://localhost:3000';
  var path    = '/devices'
  var fixture = __dirname + '/fixtures/devices.json';
  var scope   = nock(host).post(path).replyWithFile(201, fixture);

  it('keeps status code', function(done) { 
    request('http://localhost:8000' + path, function(error, res, body) {
      console.log(error)
      expect(res.statusCode).toEqual('201');
      done();
    });
  });
});
