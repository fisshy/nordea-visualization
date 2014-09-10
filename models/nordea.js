var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;


var Nordea = new Schema({
  transaction:    { type: String, required: true  },
  date:           { type: Date                    },
  amount:         { type: Number, required: true  },
  category:       { type: Schema.Types.ObjectId,  ref: 'Category' },
  createdAt:      { type: Date, default: Date.now }
});


module.exports =  mongoose.model('Nordea', Nordea);