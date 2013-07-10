angular.module('app.calculatorCtrl', [
  'app.householdCtrl'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/calculator/household', {
    templateUrl: 'app/calculator/household/household.tpl.html',
    controller: 'householdCtrl'
  });
})
.controller('calculatorCtrl', function ($scope) {

});