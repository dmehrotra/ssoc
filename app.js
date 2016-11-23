var express = require('express');
var app = express();
var locations = require('./utilities/util.js')

app.use('/static',express.static(__dirname + '/views'));

app.get('/', function(req,res){
	res.sendFile(__dirname + "/views/index.html");
	
})

app.get('/data', function(req,res){
	locations.util().clean(function(data){
		res.json(data)
	})
})


app.listen(8080,function(){
	console.log('listening on port 8080');
});

