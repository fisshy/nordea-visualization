var Nordea = require('../models/nordea');
var async  = require('async');

var transactions = function(req, res, next) {
  Nordea.find({})
  	.populate('category')
  	.exec(function(err, result) {
	    if(err) return next(err);
	    return res.json(result);
  });
};

var merge = function(req, res, next) {
	var transactions = req.body;

	if(!transactions ) {
		return next('no transactions provided');
	}

	async.each(transactions, 
		function(trans, callback) {
			if(!trans.category) { return callback(); }

			Nordea.findOne({ _id : trans._id }, 
				function(err, transaction) {
					if(err) return callback(err);
					if(!transaction) return callback('not found');
					transaction.category = trans.category._id;
					transaction.save(
						function(err, result) {
							if(err) return callback(err);
							callback();
					});
				}		
			);
	},function(err) {
			if(err) return next(err);
			res.json(true);
	});

};

module.exports = function(app) {
  app.get( '/transactions' , transactions	);
  app.post('/transactions' , merge				);
};