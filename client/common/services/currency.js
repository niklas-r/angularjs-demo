angular.module('services.currency', [])
.factory('currency', function () {
  var _income = 0,
      _tax = 0,
      _calculateTax;


  /**
   * Calculate tax
   *
   * @param  {float} tax Tax percentage
   *
   * @return {float}     Tax amount
   */
  _calculateTax = function (tax) {
    console.log(tax);
    var taxAmount = (tax * 100) / _income;
    return taxAmount.toFixed(2);
  };

  return {

    /**
     * Update the gross income
     *
     * @param  {int} income Total gross income
     *
     * @return {this}
     */
    updateIncome : function (income) {
      _income = income;
      return this;
    },

    /**
     * Update tax amount
     *
     * @param  {array} tax List of taxes per person
     *
     * @return {int} Total tax amount
     */
    updateTax : function (tax) {
      // reset old tax val
      _tax = 0;
      for (var i = 0; i < tax.length; i++) {
        _tax += parseFloat(_calculateTax(tax[i]));
      }
      console.log(_tax);
      return this;
    },

    /**
     * Get total tax amount
     *
     * @return {int} Tax amount
     */
    getTaxAmount : function () {
      return _tax;
    },

    /**
     * Get gross income
     *
     * @return {int} Gross income
     */
    getGrossIncome : function () {
      return _income;
    },

    /**
     * Get net income
     *
     * @return {int} Net income
     */
    getNetIncome : function () {
      var tax = this.getTaxAmount(),
          amount = this.getGrossIncome();

      return amount - tax;
    }
  };
});