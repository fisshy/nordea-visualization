var Nordea = require('../nordea/nordea');

var upload = function(req, res, next) {

};

var template = function(req, res, next) {
  res.render('upload/index');
};

module.exports = function(app) {
  app.post('/upload' , upload);
  app.get( '/upload' , template);
};