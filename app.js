
/**
 * Module dependencies.
 */

var express 	= require('express');
var routes 		= require('./routes');
var http 		= require('http');
var path 		= require('path');
var mongoose 	= require('mongoose');
var app 		= express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

mongoose.connect(require('./config/db.js'));

require('./routes/nordea')	(app);
require('./routes/upload')	(app);
require('./routes/home')	(app);
require('./routes/category')(app);

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
