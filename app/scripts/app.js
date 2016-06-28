'use strict';

/**
 * @ngdoc overview
 * @name cubosApp
 * @description
 * # cubosApp
 *
 * Main module of the application.
 */
angular
  .module('cubosApp', [
    'ngAnimate',
    'ngAria',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
