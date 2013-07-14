angular.module('app.incomeCtrl', [
  'services.calculatorStorage',
  'services.currency'
])
.controller('incomeCtrl', [
  '$scope',
  'calculatorStorage',
  'currency',
  function ($scope, calculatorStorage, currency) {
    var data, fakeData = {};

  fakeData.household = {
    "county": 180,
    "peopleLength": "4",
    "people": [
      {
        "id": 0,
        "firstName": "Niklas",
        "lastName": "Rasmusson",
        "sex": "male",
        "birthYear": "1989",
        "churchFee": "false",
        "tax": 32.5
      },
      {
        "id": 1,
        "tax": 31.7,
        "firstName": "Arne",
        "lastName": "Vajjsing",
        "sex": "male",
        "birthYear": "1963",
        "churchFee": "true"
      },
      {
        "id": 2,
        "tax": 31.7,
        "firstName": "En",
        "lastName": "Man",
        "sex": "male",
        "birthYear": "2091",
        "churchFee": "true"
      },
      {
        "id": 3,
        "tax": 32.5,
        "firstName": "En",
        "lastName": "Kvinna",
        "sex": "female",
        "birthYear": "2089",
        "churchFee": "false"
      }
    ]
  };

  data = calculatorStorage.getStoredData("household");

  $scope.peopleData = data;
  // $scope.peopleData = fakeData; // for testing

  $scope.checkForData = function () {
    return !!$scope.peopleData.household;
  };

  $scope.updateIncome = function (incomeObj, tax) {
    var income = 0;
    incomeObj.gross = 0;

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

    incomeObj.gross = income;
    incomeObj.net = currency.calculateNetIncome(income, tax);
    incomeObj.paidTax = parseFloat(incomeObj.gross - incomeObj.net).toFixed(2);
  };

  $scope.getColumnClass = function () {
    return "col-lg-" + 12 / $scope.peopleData.household.people.length;
  };

  $scope.getTotalGrossIncome = function () {
    var people = $scope.peopleData.household.people,
        grossIncome = 0;

    angular.forEach(people, function(person){
      grossIncome += person.income.gross;
    });

    return grossIncome;
  };

  $scope.getTotalNetIncome = function () {
    var people = $scope.peopleData.household.people,
        netIncome = 0;

    angular.forEach(people, function(person){
      netIncome += person.income.net;
    });

    return netIncome;
  };

  $scope.getTotalTaxPaid = function () {
    var people = $scope.peopleData.household.people,
        tax = 0;

    angular.forEach(people, function(person){
      tax += person.income.paidTax;
    });

    return tax;
  };

}]);