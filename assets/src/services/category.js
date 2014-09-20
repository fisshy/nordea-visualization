angular.module('nordea').factory('Category', function($resource) {
  return $resource('/categories/:id', { id : '@_id' });
});