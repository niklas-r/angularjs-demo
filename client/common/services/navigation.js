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
      var childPages = [];

      angular.forEach(parentPage.childIds, function(childId){
        var childPage  = pages.getPageById(childId);

        childPages.push(childPage);
      });

      return childPages;
    };

    return factory;
  }
]);
