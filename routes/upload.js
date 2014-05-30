var NordeaParser = require('../nordea/nordea');
var Nordea       = require('../models/nordea');

var upload = function(req, res, next) {
  var files = req.files;
  if(files) {
    var file = files.file;
    var nordea = new NordeaParser(file.path);
    Nordea.remove().exec();
    nordea.forEach(function each(err, transaction) {
      if(err) return next(err);
      if(transaction) {
        new Nordea(transaction).save(function(err, saved) {
          if(err) return next(err);
        });
      }
    },
    function done() {
      Nordea.find({}, function(err, results){
        if(err) return next(err);
        return res.json(results);
      });
    });
  }
};

var template = function(req, res, next) {
  res.render('upload/index');
};

module.exports = function(app) {
  app.post('/upload' , upload);
  app.get( '/upload' , template);
};