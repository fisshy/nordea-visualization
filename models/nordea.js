var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;
mongoose.connect(require('../config/db.js'));


var Nordea = new Schema({
  transaction:    { type: String, required: true  },
  date:           { type: Date                    },
  amount:         { type: Number, required: true  },
  createdAt:      { type: Date, default: Date.now }
});


module.exports =  mongoose.model('Nordea', Nordea);