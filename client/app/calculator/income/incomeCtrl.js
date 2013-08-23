'use strict';
angular.module('app.incomeCtrl', [
  'services.calculatorStorage',
  'services.currency'
])
.controller('incomeCtrl', [
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

  $scope.updateIncome = function (personObj, tax) {
    var income = 0,
        incomeObj = personObj.income;

    personObj.results.grossIncome = 0;

    for (var prop in incomeObj) {
      if (incomeObj.hasOwnProperty(prop)) {
        var value = parseInt(incomeObj[prop], 10);
        var amount = 0;

        if (!isNaN(value)) {
          amount = value;
        }

        income += amount;
      }
    }

    personObj.results.grossIncome = income;
    personObj.results.netIncome = currency.calculateNetIncome(income, tax);
    personObj.results.paidTax = parseFloat(personObj.results.grossIncome - personObj.results.netIncome).toFixed(2);
  };

  $scope.getColumnClass = function () {
    return "col-lg-" + 12 / $scope.peopleData.household.people.length;
  };

}]);