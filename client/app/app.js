'use strict';
/*global angular*/
(function (){
  var app = angular.module('app', [
    'app.homeCtrl',
    'app.aboutCtrl',
    'app.calculatorCtrl',
    'services.navigation',
    'services.pages'
  ]);

  /**
   * App config
   *  
   */

  app.config([
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {
      /**
       * App routing
       *
       * Child routes are configured in its parent module
       * 
       */
      $routeProvider
      .when('/', {
        templateUrl: '/app/home/home.tpl.html',
        controller: 'homeCtrl'
      })
      .when('/calculator', {
        templateUrl: '/app/calculator/calculator.tpl.html',
        controller: 'calculatorCtrl'
      })
      .when('/about', {
        templateUrl: '/app/about/about.tpl.html',
        controller: 'aboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
    }
  ]);

  /**
   *  App controllers
   *  
   */

  app.controller('appCtrl', [
      '$scope',
      '$location',
      '$routeParams',
      'mainNavigation',
      'subNavigation',
      'pages',
      function ($scope, $location, $routeParams, mainNavigation, subNavigation, pages) {

      $scope.mainNavLinks = mainNavigation.getLinks();

      // Update activePage on successfull route change,
      // essentially updating the main navigation
      $scope.$on('$routeChangeSuccess', function () {
        pages.setActivePage($location);
        $scope.activePage = pages.getActivePage();

        $scope.activePageSection = mainNavigation.getActivePageSetion();

        $scope.subNavLinks = subNavigation.getChildPages($scope.activePageSection);
      });
    }
  ]);
}());
