var express = require('express'),
app = express(),
methodOverride = require('method-override'),
morgan = require('morgan'),
serveStatic = require('serve-static'),
path = require('path'),
theData = require('./output.json'),
randomize = require('./utils/randomize');

var port = 8080;

app.use(morgan('dev'));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/', express.static(__dirname + '/'));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.get('/data', function(req,res) {
  res.send(randomize(theData, 25));
});

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
