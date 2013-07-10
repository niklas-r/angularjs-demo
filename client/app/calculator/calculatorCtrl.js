angular.module('app.calculatorCtrl', [
  'app.householdCtrl'
])
.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/calculator/household', {
      templateUrl: 'app/calculator/household/household.tpl.html',
      controller: 'householdCtrl'
    });
  }
])
.controller('calculatorCtrl', [
  '$scope',
  function ($scope) {
    // Do something
  }
]);