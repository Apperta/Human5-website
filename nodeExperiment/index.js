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
app.use(express.static(__dirname + '/www'));
app.use(cors());

var connection  = mysql.createConnection(
{
        connectionLimit : 100,
        host:      'localhost',
        port:      '3306',
        user:      'root',
        password:  'root',
        database:  'experiment',
        debug:      false,
        multipleStatements: true
})
connection.connect();

/*
submit form 
info... 
name...

submit 
me/group
local/server

done
refresh table 
*/

function insert ( req, res)
{
        var values =
        {
                info: req.query.info,
                name: req.query.name,
                value: req.query.value,
        }

        connection.query("insert into info (info, name, privacy) values (\""+ values.info + "\",\"" + values.name + "\",\""+ values.value + "\") ", function ( err, rows)
        {
        		console.log("result from insert");
        		console.log(req.query);
        		console.log(req.body);
                if(err)
                {
                        res.json({"Response": "Failed to add"});
                }
                else
                {
                        res.json('{"id" : ' + rows.insertId + '}');
                }
        })
}



function getAll ( req, res)
{

        connection.query("select * from info", function ( err, rows)
        {
        		console.log("result from select");
        		console.log(req.query);
        		console.log(req.body);
                if(err)
                {
                        res.json({"Response": "Failed to read"});
                }
                else
                {
                        res.json(rows);
                }
        });
}






app.get('/getAll',function(req, res)
{
        getAll( req, res);
});


app.get('/insert',function(req, res)
{
        insert( req, res);
});

app.get('/',function(req, res)
{
        res.sendFile('index.html', { root : '/NHS-IBM-Genomics/html5up-helios/' });
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
