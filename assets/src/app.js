angular.module('nordea', ['ngRoute'])
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      //Home
      .when('/', {
        templateUrl : '/upload',
        controller  : 'UploadCntrl'
      });
  });
