var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/Readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/Writeme.txt');

myReadStream.pipe(fs.createWriteStream(__dirname + '/Write.txt'));
myReadStream.on('data',function(chunk){
    console.log('new chunk recieved');
    console.log(chunk);
    myWriteStream.write('Hey SHuvo');
});