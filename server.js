var express = require('express');
var path = require('path');
const config = require('./config');

var app = express();
var publicPath = path.resolve(__dirname, 'public');

// We point to our static assets
app.use(express.static(publicPath));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// And run the server
app.listen(config.port, function () {
  console.log('Server running on port ' + config.port);
});