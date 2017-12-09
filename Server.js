const express = require('express');
const app = express();
var express = require('express');

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
 
  app.listen(process.env.PORT || 3000, function(){
    //console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });