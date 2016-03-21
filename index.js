var express = require('express');
var app = express();

// Static middleware
app.use('/vendor/', express.static(__dirname + '/vendor/'));
app.use(express.static('public'));

// Configuration
app.set('views', './views');
app.set('view engine', 'jade')

// Routes
app.get('/', function (req, res) {
  res.render('welcome/index');
});

// Server
var server = app.listen(process.env.PORT || 8000, function () {
  var host = server.address().address;
  var port = server.address().port;
});
