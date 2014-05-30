
var home = function(req, res, next) {
  
};

var template = function(req, res, next) {
  res.render('home/index');
};

module.exports = function(app) {
  app.get('/home' , template);
};