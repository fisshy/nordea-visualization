angular.module('nordea').factory('Category', function($http) {
  var categories;
  return {
    categories : categories,
    load : function() {
      return $http.get('/categories')
    }
  };
});