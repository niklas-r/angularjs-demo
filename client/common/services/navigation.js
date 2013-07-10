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
        var pageDepth = pages.getPageDepth(allPages[i].id);

        if (pageDepth === 1) {
          mainNavLinks.push(allPages[i]);
        }
      }

      return mainNavLinks;
    };

    factory.getActivePageSetion = function () {
      var currentTopPath = $location.path().match(/\/[a-zA-Z0-9-_]*/)[0],
          activePageSection = "";

      angular.forEach(allPages, function(page){
        if (page.href === currentTopPath) {
          activePageSection = page;
        }
      });

      return activePageSection;
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
    var factory = {};

    factory.getChildPages = function (parentPage) {
      var childPages = pages.getChildPagesById(parentPage.id);

      return childPages;
    };

    return factory;
  }
]);
