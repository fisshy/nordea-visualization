var Category = require('../models/category');

var categories = function(req, res, next) {
  Category.find({}, function(err, result) {
    if(err) return next(err);
    return res.json(result);
  });
};

var merge = function(req, res, next) {
  var categoryId = req.params.categoryId;
  if(categoryId) {
    Cartegory.find({ _id : categoryId}, function(err, category) {
      if(err) return next(err);
      category.name = req.body.name;
      category.save(function(err) {
        if(err) return next(err);
        req.json(category);
      })
    })
  } else {
    new Category({
      name : req.body.name
    }).save(function (err, category) {
      if(err) return next(err);
      res.json(category);
    });
  }
};

module.exports = function(app) {
  app.get(  '/categories' , categories);
  app.post( '/categories' , merge);
};