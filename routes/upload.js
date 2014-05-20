var Nordea = require('../nordea/nordea');

var upload = function(req, res, next) {
  var files = req.files;
  if(files) {
    var file = files[0];
  }
  res.json(true);
};

var template = function(req, res, next) {
  res.render('upload/index');
};

module.exports = function(app) {
  app.post('/upload' , upload);
  app.get( '/upload' , template);
};