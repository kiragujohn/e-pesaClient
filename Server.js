const express = require('express');
const app = express();
var http = require('http');
var express = require('express');

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
http.listen(process.env.port || 5000, function(){
    console.log('listening on', http.address().port);
  });
