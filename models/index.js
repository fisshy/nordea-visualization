var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect(require('./config/db.js'));

var models = {};

var models_path = __dirname + '/models';
fs.readdirSync(models_path).forEach(function (file) {
  if(file.substr(-3) === '.js') {
    var model = require(models_path + '/' + file);
    if(model.modelName) {
      models[model.modelName] = model;
    }
  }
});

module.exports = models;