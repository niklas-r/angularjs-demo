angular.module('app.householdCtrl', []).controller('householdCtrl', ['$scope', function ($scope) {
  var _people, cutPerson, pastePerson, Person, defaultPerson;

  // Array for storing removed people
  _people = [];

  // Person Construct
  Person = {
    name: "Namn",
    sex: "male"
  };

  //Defaults
  defaultPerson = angular.extend({}, Person);

  $scope.household = {
    county: "Tyresö",
    peopleLength: 1,
    people: [defaultPerson]
  };

  $scope.updatePeople = function (value) {

    var len = $scope.household.people.length;

    value = parseInt(value, 10);

    // if length of existing people is less than
    // value form model
    if (len < value) {

      // append as many as necessary
      while(len < value) {
        var person = {};

        // check for stored people
        if (_people.length === 0) {
          // append new person
          person = angular.extend({}, Person);
        } else {
          // grab first object from _people and append 
          person = _people.splice(0, 1)[0];
        }

        $scope.household.people.push(person);

        // update length
        len = $scope.household.people.length;
      }

    } else {
      var peopleToRemove = $scope.household.people.splice(value, len);

      angular.forEach(peopleToRemove, function(personToRemove){
        _people.push(personToRemove);
      });
    }

    console.log($scope.householdForm);
  };

}]);