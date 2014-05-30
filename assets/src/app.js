angular.module('nordea', ['ngRoute', 'angularFileUpload'])
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      //Home
      .when('/', {
        templateUrl : '/upload',
        controller  : 'UploadCntrl'
      })
	  .when('/home', {
        templateUrl : '/home',
        controller  : 'HomeCntrl'
      });
  });
