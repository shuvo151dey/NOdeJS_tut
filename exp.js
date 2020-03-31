var express = require('express');

var app = express();

app.set('view engine','ejs');
var hobbies = ['coding','binge-watching','reading'];
app.get('/', function(req,res){
    res.render('index');
});
//app.use('/assests', express.static()); ......for static files like css,etc
app.get('/contact', function(req,res){
    res.render('contact');
});

/*app.get('/profile/:name', function(req,res){
    res.render('index',{person: req.params.name, hobbies: hobbies});
});*/
app.listen(3000);