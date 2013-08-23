describe("Expenses controller", function() {
  var scope, calcStorageService, currencyService, ctrl;

  beforeEach(module('app.expensesCtrl',
    'services.calculatorStorage',
    'services.currency'
  ));

  beforeEach(inject(function ($rootScope, $controller, calculatorStorage, currency) {
    scope = $rootScope.$new();
    ctrl = $controller('expensesCtrl', {$scope: scope});
    calcStorageService = calculatorStorage;
    currencyService = currency;
  }));

  it("should generate class string", function() {
    expect(scope.getColumnClass()).toBe("col-lg-12");

    scope.peopleData = {
      household : {
        people: ["testing", true, 1337]
      }
    };

    expect(scope.getColumnClass()).toBe("col-lg-4");
  });

  it("should calculate a persons total expenses", function() {
    var personObj = {
      expenses: [10, 50, 30],
      results : { totalExpenses: 0 }
    };

    expect(personObj.results.totalExpenses).toBe(0);

    scope.updateExpenses(personObj);

    expect(personObj.results.totalExpenses).toBe(90);
  });

});