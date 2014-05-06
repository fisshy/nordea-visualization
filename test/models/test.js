var assert        = require("assert");
var nordea_parse  = require('../../models/nordea/parse-row');

describe('Parse row', function() {

  describe('Check arguments', function() {

    var result = nordea_parse('2014-05-06,Xtraspar,,"-10,00","15.029,10"');

    it('should return 4 arguments', function() {
      assert.equal(4, result.length);
    });

    it('First argument should equal 2014-05-06', function() {
      assert.equal(result[0], '2014-05-06');
    });

    it('Second argument should Xtraspar', function() {
      assert.equal(result[1], 'Xtraspar');
    });

    it('Third argument should equal -10,00', function() {
      assert.equal(result[2], '-10,00');
    });

    it('Forth argument should equal 15.029,10', function() {
      assert.equal(result[3], '15.029,10');
    });

  })
})
