var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('./index.html', null, function(err, data) { 
    if(err) {
      res.writeHead(404);
      res.write('file ah kaanomeh...')
    }
    else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    }
    
    res.end();
  });
}).listen(process.env.PORT || 8080);
console.log('server-side rendering working fine');
