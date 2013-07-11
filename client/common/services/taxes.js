angular.module('services.taxes', [])
.factory('taxes', function () {
  var factory = {},
      taxList = [];

  factory.getTaxList = function () {
    console.log("Taxes");
  };

  return factory;
});