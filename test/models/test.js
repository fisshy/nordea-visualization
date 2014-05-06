var assert 			= require("assert");
var nordea_parse 	= require('../../models/nordea/parse-row');

describe('Parse row', function() {
  describe('arguments exists', function() {

  	var result = nordea_parse('2014-05-06,Xtraspar,,"-10,00","15.029,10"');

    it('should return 4 arguments', function() {
      assert.equal(4, result.length);
    });

  })
})
