"use strict";
let express = require('express');
let app = express();
// let fs = require('fs');
let path = require('path');
const PORT = 3838;

app.use('/',express.static(path.resolve(__dirname +'/../../src/app')));
console.log(path.resolve(__dirname +'/../../src/app'))
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname +'/../../src/app/index.html'), function(error) {
    if (error) {
      console.error(error);
    }
    else {
      console.log("Sent index.html");
    }
  });
});

app.listen(PORT, function() {
  console.log(`Listening on  http://localhost:${PORT}`);
})
