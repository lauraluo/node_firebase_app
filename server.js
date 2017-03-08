/**
 * Module dependencies.
 */

var express = require('express');

// Path to our public directory
var pub = __dirname + '/public';
var app = express();

app.use(express.static(pub));
app.set('views', __dirname + '/views');

app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('users', {
    data: null
  });
});

app.get('/login', function (req, res) {
  res.render('login', {
    data: null
  });
});


app.use(function (err, req, res, next) {
  res.send(err.stack);
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3002, function () {
    console.log('port:3002');
  });
}
