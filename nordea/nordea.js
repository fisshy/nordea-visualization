var parse     = require('./parse-row');
var convert   = require('./convert-row');
var readFile  = require('./read-file');

var Nordea = function(file) {
  this._file = file;
};

var createValidNordeaObject = function(row) {
  var result = parse(row);
  var converted = convert(result);
  return converted;
};

Nordea.prototype.forEach = function(each, done) {
  readFile(this._file, function(err, row) {
    if(row) {
      each(err, createValidNordeaObject(row));
    }
  }, done);
};

Nordea.prototype.all = function (done) {
  var all = [];
  readFile(this._file, function(err, row) {
    if(err) { done(err); }
    all.push(createValidNordeaObject(row));
  }, function() {
    done(null, all);
  });
}

module.exports = Nordea;