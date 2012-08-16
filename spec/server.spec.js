var nock    = require('nock');
var http    = require('http');
var request = require('request');

describe('when requires a resource', function() {

  var fixture = __dirname + '/fixtures/devices.json';
  var scope = nock('http://localhost:8000').get('/devices').replyWithFile('201', fixture);

  it('keeps status code', function(done) { 
    request('http://localhost:8000/devices', function(error, res, body) {
      expect(res.statusCode).toEqual('201');
      done();
    });
  });
});
