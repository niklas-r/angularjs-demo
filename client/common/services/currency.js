'use strict';
angular.module('services.currency', [])
.factory('currency', function () {
  var _calculateTax;


  /**
   * Calculate tax
   *
   * @param  {float} tax Tax percentage
   *
   * @return {float}     Tax amount
   */
  _calculateTax = function (amount, tax) {
    var taxAmount = (tax / 100) * amount;
    return taxAmount;
  };


  return {
    /**
     * Calculate net income from gross income
     *
     * @param  {int} grossIncome Income amount
     * @param  {float} tax       Tax percentage
     *
     * @return {float}           Net income
     */
    calculateNetIncome: function (grossIncome, tax) {
      var net = 0,
          taxAmount = 0;

      taxAmount = _calculateTax(grossIncome, tax);
      net = grossIncome - taxAmount;

      return net.toFixed(2);
    }
  };
});