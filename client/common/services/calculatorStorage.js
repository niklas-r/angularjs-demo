angular.module('services.calculatorStorage', [])
.factory('calculatorStorage', function () {
  var factory = {},
      _storedData = [];


  factory.addDataToStorage = function (dataToStore) {
    if (!dataToStore) {
      throw new Error("addDataToStorage: Missing parameter 'dataToStore'");
    }

    _storedData.push(dataToStore);

    return;
  };

  factory.getStoredData = function (name) {
    var storedData = "";

    if (!_storedData || _storedData.length < 0) {
      throw new Error("getStoredData: No data in storage.");
    }

    for (var i = 0; i < _storedData.length; i++) {
      if (_storedData[i][name]) {
        storedData = _storedData[i];
      } else {
        throw new Error("getStoredData: Could not retrive data.");
      }
    }

    return storedData;
  };

  return factory;
});