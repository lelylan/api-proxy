var nock    = require('nock');
var http    = require('http');
var request = require('request');

describe('when requires a resource', function() {

  var fixture = __dirname + '/fixtures/devices.json';
  var scope = nock('http://localhost:8000').post('devices').replyWithFile(200, fixture);

  //it('keeps status code', function(done) { 
  //request('http://localhost:8000/devices', function(error, res, body) {
  //console.log(error);
  ////expect(res.statusCode).toEqual('201');
  //done();
  //});
  //});

  it("get gets mocked", function(done) {
    var dataCalled = false

    var scope = nock('http://www.google.com')
    .get('/')
    .reply(200, "Hello World!");

    var req = http.request({
      host: "www.google.com"
      , path: '/'
      , port: 80
    }, function(res) {
      expect(res.statusCode).toEqual('200');
    });

    req.end();
    done();
  });
});
