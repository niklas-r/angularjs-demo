var app = angular.module('services.navigation', [
  'services.pages'
]);

// **********************
// Main Navigation
// **********************

app.factory('mainNavigation', [
  '$location',
  'pages',
  function ($location, pages) {
    var factory = {},
        allPages = pages.getPages();

    factory.getLinks = function () {
      var mainNavLinks = [];

      for (var i = 0; i < allPages.length; i++) {
        if (allPages[i].parentId === "") {
          mainNavLinks.push(allPages[i]);
        }
      }

      return mainNavLinks;
    };

    factory.getActiveTopPath = function () {
      var currentTopPath = $location.path().match(/\/[a-zA-Z0-9-_]*/)[0];

      return currentTopPath;
    };

    return factory;
  }
]);

// **********************
// Sub Navigation
// **********************

app.factory("subNavigation", [
  'pages',
  '$routeParams',
  function (pages) {
    var factory = {}, _activePage;

    // scope.$on('$routeChangeSuccess', function () {
    //   _activePage = pages.getActivePage();
    // });

    return factory;
  }
]);
