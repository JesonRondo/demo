//var path = '/data/app/www.mogujie.com/public/js/core/jquery-1.9.1.min.js';

var http = require('http');
//var fs = require('fs');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/x-javascript"});
  //fs.readFile(path, 'UTF-8', function(err, data) {
    //response.end(data);
  //});

  response.end('hello wordd');
});

server.listen(8812);
