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

myApp.controller('DemoCtrl', [function() {
  document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });
  document.querySelector( ".burger-menu" ).addEventListener( "click", function() {
    this.classList.toggle( "menu-on" );
    document.querySelector("#sidebar-wrapper").classList.toggle( "open" );
  });
  document.querySelector( ".rendered-content" ).addEventListener( "click", function() {
    document.querySelector("#sidebar-wrapper").classList.toggle( "open" );
  });
}]);
