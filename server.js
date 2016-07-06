var express = require('express');
var app = express();

var port = process.env.PORT || 3000;;

app.use(express.static(__dirname));

app.get('/', function (req, res) {
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});

var test = function () {};
///Test