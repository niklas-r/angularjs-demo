angular.module('services.pages', [])
.factory('pages', function () {
  var factory = {},
      activePage = "",
      pageStructure = [
        {
          title: "Hem",
          href: "/",
          id : 0,
          parentId: "",
          childIds: []
        },
        {
          title: "Budgetkalkylator",
          href: "/calculator",
          id : 1,
          parentId: "",
          childIds: [4]
        },
        {
          title: "Om oss",
          href: "/about",
          id : 2,
          parentId: "",
          childIds: []
        },
        {
          title: "Hushåll",
          href: "/calculator/household",
          id : 4,
          parentId: 1,
          childIds: []
        }
      ];

  factory.getPages = function () {
    /* TODO: make page source async */
    return pageStructure;
  };

  factory.getPageById = function (id) {
    var pages = factory.getPages(),
        page = "";

    angular.forEach(pages, function(currentPage){
      if (currentPage.id === id) {
        page = currentPage;
      }
    });

    return page;
  };

  factory.setActivePage = function ($location) {
    var pages = factory.getPages();

    pages.forEach(function (link) {

      if (link.href === $location.path()) {
        activePage = link;
      }
    });

    return activePage;
  };

  factory.getActivePage = function () {
    return activePage;
  };

  return factory;
});