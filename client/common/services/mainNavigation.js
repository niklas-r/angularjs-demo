angular.module('services.mainNavigation', []);
angular.module('services.mainNavigation').factory('mainNavigation', function ($location) {
  var factory = {};

  factory.getLinks = function (pages) {
    var mainNavLinks = [];

    for (var i = 0; i < pages.length; i++) {
      if (pages[i].parentId === "") {
        mainNavLinks.push(pages[i]);
      }
    }

    return mainNavLinks;
  };

  factory.getActiveTopPath = function () {
    var currentTopPath = $location.path().match(/\/[a-zA-Z0-9-_]*/)[0];

    return currentTopPath;
  };

  return factory;
});
