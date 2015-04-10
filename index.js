var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');

var app = express();

app.get('/', function (req, res) {
  res.render('index');
});

app.use(sassMiddleware({
  src: path.join(__dirname, 'assets'),
  dest: path.join(__dirname, 'public'),
  debug: true,
  outputStyle: 'expanded'
}));

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'jade')

var server = app.listen(process.env.PORT || 8000, function () {
  var host = server.address().address;
  var port = server.address().port;
});
