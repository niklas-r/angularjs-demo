'use strict';

angular.module('directive.chart', [])
.directive('chart', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      $(element).highcharts(scope[attrs.chart]);
    }
  };
});