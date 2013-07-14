angular.module('app.resultCtrl', [])
.controller('resultCtrl', [
  '$scope',
  'calculatorStorage',
  function ($scope, calculatorStorage) {
    var data = {}, graphSeries = [];

    data = calculatorStorage.getStoredData("household");

    console.log(data);

    $scope.peopleData = data;

    $scope.checkForData = function () {
      if (data.hasOwnProperty("household") &&
          data.household.people[0].hasOwnProperty("results") &&
          data.household.people[0].results.hasOwnProperty("netIncome") &&
          data.household.people[0].results.hasOwnProperty("totalExpenses")) {
        return true;
      } else {
        return false;
      }
      return false;
    };

    if ($scope.checkForData()) {
      angular.forEach($scope.peopleData.household.people, function(person){
        console.log(person);
        graphSeries.push({
          name: person.firstName + " " + person.lastName,
          data: [
            parseInt(person.results.netIncome, 10),
            parseInt(person.results.totalExpenses, 10),
            parseInt(person.results.paidTax, 10)
          ]
        });
      });

      $("#graph").highcharts({
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Budgetkalkylen'
        },
        xAxis: {
          categories: ['Inkomster', 'Utgifter', 'Skatt', 'Överskott']
        },
        yAxis: {
          title: {
            text: 'Personer'
          }
        },
        series: graphSeries
      });
    }
  }
]);