angular.module('nordea')
  .controller('UploadCntrl', function($scope, $upload, Nordea, $location) {
    $scope.onFileSelect = function($files) {
    	$files = angular.isArray($files) ? $files : [$files];
	    for (var i = 0; i < $files.length; i++) {
	      var file = $files[i];
	      $scope.upload = $upload.upload({
	        url: '/upload',
	        file: file, 
	      }).progress(function(evt) {
	        
	      }).success(function(data, status, headers, config) {
	       	Nordea.transactions = data;
	       	$location.url('/home');
	      });
	    }
	  };
  });