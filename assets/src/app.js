angular.module('nordea', ['ngRoute', 'ngResource', 'angularFileUpload'])
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
      })
      .when('/categories', {
        templateUrl : '/categories',
        controller  : 'CategoryCntrl'
      });
  });
