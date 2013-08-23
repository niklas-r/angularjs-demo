var express = require('express'),
    http = require('http'),
    path = require('path'),
    lessMiddleware = require('less-middleware');

var config = require('./config.js');

var app = express();
var server = http.createServer(app);

// Start logger first to log everything
app.use(express.logger('dev'));

// Compile less, important to do this before serving static files
// otherwise middleware won't compile
app.use(lessMiddleware({
  src: path.join(__dirname, config.server.clientRoot, 'stylesheets/less'),
  dest: path.join(__dirname, config.server.clientRoot, 'stylesheets/css'),
  prefix: '/stylesheets/css'
}));

// Look for static files: index.html, css, images, etc.
app.use(express.compress());
app.use(express.static(path.join(__dirname, config.server.clientRoot)));
app.use(function(req, res, next) {
  res.sendfile('index.html', { root: config.server.clientRoot });
  // res.send(404); // If we get here then the request for a static file is invalid
});

// General environment settings
app.set('port', process.env.PORT || config.server.listenPort);
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.methodOverride());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  console.log("Server started in development mode.");
}

// This route deals enables HTML5Mode by forwarding missing files to the index.html
app.all('/*', function(req, res) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendfile('index.html', { root: config.server.clientRoot });
});

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
