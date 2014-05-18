var parse   	= require('./parse-row');
var convert  	= require('./convert-row');
var readfile 	= require('./read-file');

var Nordea = function(file) {
	this._file = file;
};

var createValidNordeaObject = function(row) {
	var result = nordea_parse(row);
  return nordea_convert(result);
};

Nordea.prototype.forEach = function(each, done) {
	readFile(this._file, function(err, row) {
  	each(err, createValidNordeaObject(row));
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