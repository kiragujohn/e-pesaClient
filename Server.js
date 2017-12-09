const express = require('express');
const app = express();
var express = require('express');

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

  var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });