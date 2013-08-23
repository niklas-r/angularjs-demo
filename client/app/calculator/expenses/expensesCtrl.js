angular.module('app.expensesCtrl', [
  'services.calculatorStorage',
  'services.currency'
])
.controller('expensesCtrl', [
  '$scope',
  'calculatorStorage',
  'currency',
  function ($scope, calculatorStorage, currency) {
    var data, _calculateTotalExpenses;

    data = calculatorStorage.getStoredData("household");

    $scope.peopleData = data;

    $scope.checkForData = function () {
      return !!$scope.peopleData.household;
    };

    $scope.getColumnClass = function () {
      var pplLen,
          colClass = "col-lg-12";

      if ($scope.peopleData.hasOwnProperty("household") &&
          $scope.peopleData.household.hasOwnProperty("people")) {
        pplLen = $scope.peopleData.household.people.length;
        colClass = "col-lg-" + (12 / pplLen);
      }

      return colClass;
    };

    $scope.updateExpenses = function (personObj) {
      var totalExpense = 0,
          expensesObj = personObj.expenses;

      personObj.results.totalExpenses = 0;

      for (var prop in expensesObj) {
        if (expensesObj.hasOwnProperty(prop)) {
          var value = parseInt(expensesObj[prop], 10);
          var amount = 0;

          if (!isNaN(value)) {
            amount = value;
          }

          totalExpense += amount;
        }
      }
      personObj.results.totalExpenses = totalExpense;
    };
  }
]);