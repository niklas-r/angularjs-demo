'use strict';
describe("Taxes service", function () {
  var taxService;

  beforeEach(module("services.taxes"));

  beforeEach(inject(function(taxes) {
    taxService = taxes;
  }));

  it("should return list of taxdata", function () {
    expect(taxService.getTaxList()).toBeTruthy();
  });
});