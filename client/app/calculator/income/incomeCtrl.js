angular.module('app.incomeCtrl', [
  'services.calculatorStorage',
  'services.currency'
])
.controller('incomeCtrl', [
  '$scope',
  'calculatorStorage',
  'currency',
  function ($scope, calculatorStorage, currency) {
    var data, fakeData = {}, grossIncome, netIncome;

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

  data = calculatorStorage.getStoredData();

  // $scope.peopleData = data;
  $scope.peopleData = fakeData; // for testing

  $scope.updateIncome = function () {
    var income = 0,
        taxes = [];
    angular.forEach($scope.peopleData.household.people, function(person){
      if (person.income) {
        for (var prop in person.income ) {
          if (person.income.hasOwnProperty(prop)) {
            var amount = parseInt(person.income[prop], 10);
            amount = (isNaN(amount)) ? 0 : amount;
            income += amount;
          }
        }
      }

      taxes.push(person.tax);
    });

    // update gross income
    currency.updateIncome(income);

    // update taxes
    currency.updateTax(taxes);

    // console.log(currency.get)
  };

  $scope.getColumnClass = function () {
    return "col-lg-" + 12 / $scope.peopleData.household.people.length;
  };

}]);