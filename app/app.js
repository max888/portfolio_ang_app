'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.about',
  'myApp.services',
  'myApp.contact',
  'myApp.version',
  'ngAnimate'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

myApp.controller('menuCtrl', function($scope) {
  $scope.class = "normal-burger";
  $scope.changeBurgerStatus = function(){
    if ($scope.class === "normal-burger") {
      $scope.class = "menu-on";
      angular.element(document.querySelector('#sidebar-wrapper')).addClass( "open" );
    }
    else {
      $scope.class = "normal-burger";
      angular.element(document.querySelector('#sidebar-wrapper')).removeClass( "open" );
    }
  };
});
