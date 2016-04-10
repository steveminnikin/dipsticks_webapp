var express = require('express');
var routes = require('./routes');
var apiRoutes = require('./apiRoutes');
var app = express();
var https = require('https');
var http = require('http');
var fs = require('fs');


var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 4430;


app.use('/', routes);
app.use('/api', require('./apiRoutes'));
app.use(express.static('./dist', { 'extensions': ['html'] }));

//ssl certificate details
var options = {
     key: fs.readFileSync('/etc/letsencrypt/live/www.minnikin.org.uk/privkey.pem'),
     cert: fs.readFileSync('/etc/letsencrypt/live/www.minnikin.org.uk/cert.pem'),
     ca: fs.readFileSync('/etc/letsencrypt/live/www.minnikin.org.uk/chain.pem')

};

http.createServer(app).listen(3000);
https.createServer(options, app).listen(port, function(){
	console.log('listening on ' + port);
});


