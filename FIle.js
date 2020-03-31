var fs = require('fs');

var readme = fs.readFileSync('Readme.txt', 'utf8');
//console.log(readme);
//fs.writeFileSync('write.txt', 'hey Sexy');

fs.readFile('Readme.txt', 'utf8', function(err, data){
    console.log(data);
});

console.log('Async Effect');
