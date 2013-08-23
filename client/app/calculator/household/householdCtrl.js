angular.module('app.householdCtrl', [
  'services.taxes',
  'services.calculatorStorage'
])
.controller('householdCtrl', ['$scope', 'taxes', 'calculatorStorage', function ($scope, taxes, calculatorStorage) {
  var _people, cutPerson, pastePerson, Person, defaultPerson, taxList, personTax, previousData;

  $scope.init = function () {
    // Array for storing removed people
    _people = [];

    $scope.taxList = taxes.getTaxList();

    // Person Construct
    Person = {
      firstName: "",
      lastName: "",
      sex: "male",
      birthYear: "",
      churchFee: "true",
      tax: $scope.taxList[0].churchTax
    };

    //Defaults
    defaultPerson = angular.extend({
      income: {},
      expenses: {},
      results: {}
    }, Person);

    previousData = calculatorStorage.getStoredData("household");

    // check if we have old data from "server"
    if (previousData) {
      $scope.household = previousData.household;
    } else {
      $scope.household = {
        county: $scope.taxList[0].id,
        peopleLength: 1,
        people: [defaultPerson]
      };
    }
  };

  $scope.updateTax = function () {
    var churchFee = "",
        taxId = $scope.household.county,
        taxObj = "";

    for (var i = 0; i < $scope.taxList.length; i++) {
      var taxItem = $scope.taxList[i];

      if (taxId === taxItem.id) {
        taxObj = taxItem;
        break;
      }
    }

    for (var index = 0; index < $scope.household.people.length; index++) {
      var person = $scope.household.people[index];

      if (person.churchFee === "true") {
        person.tax = taxObj.churchTax;
      } else {
        person.tax = taxObj.tax;
      }
    }
  };

  $scope.updatePeople = function (value) {
    var len = $scope.household.people.length;

    value = parseInt(value, 10);

    // if length of existing people is less than
    // value form model
    if (len < value) {

      // append as many new persons as necessary
      while(len < value) {
        var person = {};

        // check for stored people, use the "old"
        // people to populate array before creating new people
        if (_people.length === 0) {
          // append new person
          person = angular.extend({
            income: {},
            expenses: {},
            results: {},
            tax: $scope.taxList[$scope.household.county].churchTax
          }, Person);

        } else {
          // grab first object from _people and append 
          person = _people.splice(0, 1)[0];
        }

        $scope.household.people.push(person);

        // update length
        len = $scope.household.people.length;
      }

    } else {

      // store people in private array in case we want to re-add
      // them later. by doing this the data will be saved and the
      // user doesn't have to add it again
      var peopleToRemove = $scope.household.people.splice(value, len);

      angular.forEach(peopleToRemove, function(personToRemove){
        _people.push(personToRemove);
      });
    }
  };

  $scope.storeData = function (data) {
    var dataToStore = {
      household: data
    };

    calculatorStorage.addDataToStorage(dataToStore);
  };

  $scope.init();
}]);