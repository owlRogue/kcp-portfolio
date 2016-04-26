var soap = require('soap');
var cool = require('cool-ascii-faces');
var express = require('express');
var dotlattice = require('dotlattice');
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

//app.get('/admin-login', function(request, response) {
//	response.render('pages/admin-login')
//});

//app.post('/admin-login', function(request, response) {
//	var callback = dotlattice.adminLogin(); 
//	console.log(callback); 
//});

//app.get('/test-soap', function(request, response) {
//	var url = 'http://localhost:9999/ws/login?wsdl';
//	var args = {'username': 'testusername', 'password': 'testpassword', 'serverToken': 'testthing'};
//	soap.createClient(url, function(err, client) {
//		client.login(args, function(err, result) {
//			console.log(result);
//		});
//	});
//}); 

app.get('*', function(request, response) {
	response.render('pages/404')
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
