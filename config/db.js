var env = process.env.NODE_ENV || 'development';

module.exports = process.env.MONGODB_URI 
|| process.env.MONGOLAB_URI 
|| 'mongodb://localhost/nordea_' + env;