var Nordea = require('../nordea/nordea');

var upload = function(req, res, next) {

};

var template = function() {
  res.render('/upload/index');
};

module.exports = function(app) {
  app.post('/nordea' , upload);
  app.get( '/nordea' , template);
};