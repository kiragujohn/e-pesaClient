const express = require('express');
const app = express();
var http = require('http');
var express = require('express');

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));



http.listen((process.env.PORT || 5000), function(){
  console.log('listening on *:5000');
});

