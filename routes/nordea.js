var Nordea = require('../models/nordea');

var transactions = function(req, res, next) {
  Nordea.find({}, function(err, result) {
    if(err) return next(err);
    return res.json(result);
  });
};

module.exports = function(app) {
  app.get( '/transactions' , transactions);
};