angular.module('nordea').controller('HomeCntrl', function($scope, Nordea) { 
  if(!Nordea.transactions){
    Nordea.load().success(function(result) {
      Nordea.transactions = result;
      $scope.transactions = Nordea.transactions;
    });
  }
  $scope.transactions = Nordea.transactions;
});