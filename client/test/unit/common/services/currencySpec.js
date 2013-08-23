'use strict';
describe("Currency service", function () {
  var currencyService;

  beforeEach(module('services.currency'));

  beforeEach(inject(function(currency) {
    currencyService = currency;
  }));

  it("should be able to calculate net income", function () {
    var val1 = currencyService.calculateNetIncome(500, 33.3),
        val2 = currencyService.calculateNetIncome(430, 32.1);
    expect(val1).toEqual('333.50');
    expect(val2).toEqual('291.97');
  });
});