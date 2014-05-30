module.exports = function(rowArgs) {
  var converted = {};

  // should probably validate values before parsing :P to be continued...
  converted.date        = new Date(rowArgs[0]);
  converted.transaction = rowArgs[1];


  var split = rowArgs[2].split('.');
    
  var validFloat = split.join('');

  validFloat = validFloat.replace(/,/g, '.');
  
  converted.amount = parseFloat(validFloat);


  if(!converted.transaction || isNaN(converted.amount)) {
  	return null;
  }
  return converted;
};