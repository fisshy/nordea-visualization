angular.module('nordea').directive('category', 
  function(Category) {
    if(!Category.categories){
      Category.load().success(function(result) {
        Category.categories = result;
      });
    }
    return {
      template : '<select ng-model="newCat">' +
                  '<option value="">select category</option>' +
                  '<option value="new">new</option>' +
                 '</select>' +
                 '<input ng-if="newCat === \'new\'" type="text" placeholder="Add new category"/>',
      scope : {
        category : '='
      },
      link : function($scope) {
        $scope.categories = Category.categories;
      }
    }
});