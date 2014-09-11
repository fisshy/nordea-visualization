angular.module('nordea').directive('category', 
  function(Category) {
    if(!Category.categories){
      Category.load().success(function(result) {
        Category.categories = result;
      });
    }
    return {
      template : '<select ng-hide="newCat === \'new\'" ng-model="newCat">' +
                  '<option value="">select category</option>' +
                  '<option value="new">new</option>' +
                 '</select>' +
                 '<div ng-hide="newCat !== \'new\'">' +
                  '<input type="text" placeholder="Add new category"/>' +
                  '<i class="glyphicon glyphicon-ok icon ok"/>' +
                  '<i class="glyphicon glyphicon-remove icon remove" ng-click="newCat = \'\'"/>' +
                 '</div>',
      scope : {
        category : '='
      },
      link : function($scope) {
        $scope.categories = Category.categories;
      }
    }
});