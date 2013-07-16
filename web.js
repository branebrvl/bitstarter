var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var binaryIndex = fs.readFileSync("index.html").toString("binary");

var buf = new Buffer(binaryIndex.length);
buf.write(binaryIndex);
// console.log(buf.toString());

app.get('/', function(request, response) {
    response.send(buf.toString());
});

var port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
