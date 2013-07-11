angular.module('app.calculatorCtrl', [
  'app.householdCtrl',
  'app.incomeCtrl',
  'app.expensesCtrl',
  'app.resultCtrl'
])
.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/calculator/household', {
      templateUrl: 'app/calculator/household/household.tpl.html',
      controller: 'householdCtrl'
    })
    .when('/calculator/income', {
      templateUrl: 'app/calculator/income/income.tpl.html',
      controller: 'incomeCtrl'
    })
    .when('/calculator/expenses', {
      templateUrl: 'app/calculator/expenses/expenses.tpl.html',
      controller: 'expensesCtrl'
    })
    .when('/calculator/result', {
      templateUrl: 'app/calculator/result/result.tpl.html',
      controller: 'resultCtrl'
    })
  }
])
.controller('calculatorCtrl', [
  '$scope',
  function ($scope) {
    
    $scope.saveFormStep = function (model) {

    };
  }
]);