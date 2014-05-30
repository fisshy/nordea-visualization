angular.module('nordea').factory('Nordea', function($http) {
  var transactions;
  return {
    transactions : transactions,
    load : function() {
      return $http.get('/transactions')
    }
  };
});