var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.render('index');
});

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'jade')

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});
