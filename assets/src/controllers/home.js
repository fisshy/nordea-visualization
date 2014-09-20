angular.module('nordea').controller('HomeCntrl', 
	function($scope, Nordea, Category) { 
	  if(!Nordea.transactions){
	    Nordea.load().success(function(result) {
	      Nordea.transactions = result;
	      $scope.transactions = Nordea.transactions;
	    });
	  }
	  $scope.transactions = Nordea.transactions;

	  $scope.save = function() {
	  	Nordea.save($scope.transactions).success(
	  		function(result) {
	  			//todo somthing
	  	});
	  };
});