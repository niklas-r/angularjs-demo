angular.module('app.expensesCtrl', [
  'services.calculatorStorage',
  'services.currency'
])
.controller('expensesCtrl', [
  '$scope',
  'calculatorStorage',
  'currency',
  function ($scope, calculatorStorage, currency) {
    var data;

    data = calculatorStorage.getStoredData("household");

    $scope.peopleData = data;

    $scope.checkForData = function () {
      return !!$scope.peopleData.household;
    };
  }
]);