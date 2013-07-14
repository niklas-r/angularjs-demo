angular.module('services.calculatorStorage', [])
.factory('calculatorStorage', function () {
  var factory = {},
      _storedData = [];


  factory.addDataToStorage = function (dataToStore) {
    _storedData.push(dataToStore);

    return;
  };

  factory.getStoredData = function (name) {
    var storedData = "";

    if (_storedData.length < 0) {
      throw new Error("getStoredData: No data in storage.");
    }

    for (var i = 0; i < _storedData.length; i++) {
      if (_storedData[i][name]) {
        storedData = _storedData[i];
      }
    }

    return storedData;
  };

  return factory;
});