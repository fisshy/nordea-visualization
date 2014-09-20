angular.module('nordea').directive('category', 
  function(Category) {
    var categories;
    Category.query(function(result) {
      categories = result;
    });
    
    return {
      template : '<div ng-hide="state === \'new\'">' +
                  '<select ng-change="change()" ng-model="transaction.category"' + 
                    'ng-options="cat.name for cat in categories">' +
                    '<option value="">select category</option>' +
                    '<option value="new">new</option>' +
                  '</select>' +
                  '<i class="glyphicon glyphicon-plus icon" ng-click="create()"></i>' +
                 '</div>' +
                 '<div ng-hide="state !== \'new\'">' +
                  '<input type="text" ng-model="category.name" placeholder="Add new category">' +
                  '<i class="glyphicon glyphicon-ok icon ok" ng-click="save(category)"/></i>' +
                  '<i class="glyphicon glyphicon-remove icon remove" ng-click="state = null"></i>' +
                 '</div>',
      link : function($scope) {
        console.log($scope.transaction.category);
        $scope.categories = categories;
        $scope.create = function() {
          $scope.state = 'new';
          $scope.category = new Category();
        };
        $scope.save = function(category) {
          $scope.category.$save(function(newCategory) {
            $scope.transaction.category = newCategory;
            categories.push(newCategory);
            $scope.state = null;
          });
        };
        $scope.change = function () {
          if($scope.transaction.category) {
            angular.forEach($scope.transactions, function(trans) {
              if(trans.transaction === $scope.transaction.transaction) {
                trans.category = $scope.transaction.category;
              }
            });
          }
        }
      }
    }
});