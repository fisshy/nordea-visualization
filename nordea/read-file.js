var fs          = require('fs');
var readline    = require('readline');
var stream      = require('stream');
module.exports  = function(path, next, done) { 
  fs.exists(path, function(exists) {
    if(exists) {
      var instream = fs.createReadStream(path);
      var outstream = new stream;
      var rl = readline.createInterface(instream, outstream);

      rl.on('line', function(line) {
        next(null, line);
      });

      if(done) {
        rl.on('close', done);
      }

      rl.on('error', function(err) {
        next(err);
      });
      
    } else {
      next('File does not exist');
    }
  })
};  