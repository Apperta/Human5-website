var express = require('express');
var mysql = require('mysql');
var http = require('http');
var url  = require('url');
var path = require('path');
var fs   = require('fs');
var cors = require('cors');
var bodyParser = require('body-parser');
var OSPoint = require('ospoint');
var app = express();
var server = http.createServer(app);
// var jsonConcat = require('json-concat');
// var Enc = require('cryptr'), cryptr = new Enc('qe432fdsrDSadsaj43221');
// var json = require('json');
// var m = require("./mail.js");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/planeadvisor'));
app.use(cors());



app.get('/',function(req, res)
{
        res.sendFile('../html5up-helios/index.html', { root : __dirname });
});


app.get('/test.html',function(req, res)
{
        res.sendFile('www/index.html', { root : __dirname });
});

app.get('/test',function(req, res)
{
        res.sendFile('www/index.html', { root : __dirname });
});

server.listen(8080);
console.log('Express server started on port %s', server.address().port);
