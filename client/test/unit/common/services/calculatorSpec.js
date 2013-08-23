'use strict';
describe("Calculator storage service", function () {
  var calc, myData = {};

  myData = {
    "data" : {
      bestAnimal: "dogs"
    }
  };

  beforeEach(module('services.calculatorStorage'));

  beforeEach(inject(function (calculatorStorage) {
    calc = calculatorStorage;
  }));

  it("should be able to save data", function () {
    expect(calc.addDataToStorage).toThrow();
    // have to wrap function call within an anonymous function
    expect(function(){ calc.addDataToStorage(myData) }).not.toThrow();
  });


  it("should be able to read data", function () {
    var storedData;

    calc.addDataToStorage(myData);
    storedData = calc.getStoredData("data");

    expect(storedData.data).toBeDefined();
    expect(storedData.data.bestAnimal).toBeDefined();
  });
});