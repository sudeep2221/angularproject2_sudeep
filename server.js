var express = require('express');
var app = express();

//Hosting static files
app.use(express.static(__dirname + '/'));

//Get Request Call
app.get('/', function (req,res){
    res.redirect('/views/index2.html');
});

/*app.get('/', function (req,res){
    res.send("hello world at home");
});*/

/*
app.get("/project1", function (req,res){
    res.redirect('/angularprojects/views/index2.html');
});
*/



app.listen(4200,function(req,res){
    console.log("server running at port 4200:localhost:4200");
});