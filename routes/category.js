var Category = require('../models/category');

var categories = function(req, res, next) {
  Category.find({}, function(err, result) {
    if(err) return next(err);
    return res.json(result);
  });
};

module.exports = function(app) {
  app.get( '/categories' , categories);
};