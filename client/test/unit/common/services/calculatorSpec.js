describe("Calculator storage service", function () {
  var calc;

  beforeEach(module('services.calculatorStorage'));

  beforeEach(inject(function(calculatorStorage) {
    calc = calculatorStorage;
  }));

  it("should be able to save data", function () {
    var data;

    calc.addDataToStorage({ testing: true });

    data = calc.getStoredData("testing");

    expect(data.testing).toBe(true);
  });
});