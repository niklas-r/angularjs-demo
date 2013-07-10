/*global angular*/
(function (){
  var app = angular.module('app', [
    'app.homeCtrl',
    'app.aboutCtrl',
    'app.calculatorCtrl',
    'services.mainNavigation',
    'services.pages'
  ]);

  /**
   * App config
   *  
   */

  app.config(function ($routeProvider, $locationProvider) {
    /**
     * App routing
     *
     * Child routes are configured in its parent module
     * 
     */
    $routeProvider
    .when('/', {
      templateUrl: 'app/home/home.tpl.html',
      controller: 'homeCtrl'
    })
    .when('/calculator', {
      templateUrl: 'app/calculator/calculator.tpl.html',
      controller: 'calculatorCtrl'
    })
    .when('/about', {
      templateUrl: 'app/about/about.tpl.html',
      controller: 'aboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  });

  /**
   *  App controllers
   *  
   */

  app.controller('appCtrl', function ($scope, $location, $routeParams, mainNavigation, pages) {

    $scope.mainNavLinks = mainNavigation.getLinks(pages.getPages());

    // Update activePage on successfull route change,
    // essentially updating the main navigation
    $scope.$on('$routeChangeSuccess', function () {
      pages.setActivePage($location);

      $scope.activeTopPath = mainNavigation.getActiveTopPath();
      $scope.activePage = pages.getActivePage();
    });
  });

  app.filter('range', function () {
    return function (input, total) {
      var total = parseInt(total, 10);
      for (var i = 0; i < total; i++) {
        input.push(i);
      }
      return input;
    }
  });
}());