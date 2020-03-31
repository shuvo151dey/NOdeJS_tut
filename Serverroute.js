var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    if (req.url === '/home' || req.url === '/'){
        fs.createReadStream(__dirname+'/index.html','utf8').pipe(res);
    } else if (req.url === '/contact'){
        fs.createReadStream(__dirname+'/contact.html','utf8').pipe(res);
    } else {
        fs.createReadStream(__dirname+'/error.html','utf8').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('You all listening to port 3000');