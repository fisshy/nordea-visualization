module.exports = function(rowArgs) {
  var converted = {};

  // should probably validate values before parsing :P to be continued...
  converted.date        = new Date(rowArgs[0]);
  converted.transaction = rowArgs[1];
  converted.amount      = parseFloat(rowArgs[2]);

  return converted;
};