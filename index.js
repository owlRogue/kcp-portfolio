var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.render('pages/index')
});

app.get('/contact', function(request, response) {
	response.render('pages/contact')
});

app.get('/resume', function(request, response) {
	response.render('pages/resume')
});

app.get('/portfolio', function(request, response) {
	response.render('pages/portfolio')
});

app.get('*', function(request, response) {
	response.render('pages/404')
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
