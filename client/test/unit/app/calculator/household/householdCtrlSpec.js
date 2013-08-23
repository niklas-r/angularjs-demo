describe("Household controller", function() {
  var scope, ctrl, taxes;

  beforeEach(module('app.householdCtrl'));

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller("householdCtrl", {$scope: scope});
  }));

  it("should have a list of taxes", function () {
    expect(scope.taxList).toEqual(jasmine.any(Array));
    expect(scope.taxList[0]).toEqual(jasmine.any(Object));
    expect(scope.taxList[0].churchTax).toBeDefined();
  });

  it("should have a default person", function() {
    expect(scope.household.people[0]).toBeDefined();
    expect(scope.household.people.length).toBe(1);
  });

  it("should update list of people", function() {
    scope.updatePeople(2);

    expect(scope.household.people.length).toBe(2);

    scope.updatePeople(1);

    expect(scope.household.people.length).toBe(1);
  });

  it("should get stored household data", function() {
    expect(scope.household).toBeDefined();
  });
});