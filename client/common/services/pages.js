angular.module('services.pages', [])
.factory('pages', function () {
  var factory = {},
      activePage = "",
      pageStructure = [],
      pageRelations = [];

  pageStructure = [
    {
      title: "Hem",
      href: "/",
      id : 0,
    },
    {
      title: "Budgetkalkylator",
      href: "/calculator",
      id : 1,
    },
    {
      title: "Om oss",
      href: "/about",
      id : 2,
    },
    {
      title: "Hushåll",
      href: "/calculator/household",
      id : 3,
    },
    {
      title: "Inkomster",
      href: "/calculator/income",
      id : 4,
    },
    {
      title: "Utgifter",
      href: "/calculator/expenses",
      id : 5,
    },
    {
      title: "Resultat",
      href: "/calculator/result",
      id : 6,
    }
  ];

  pageRelations = [
    {
      relId: 0, // unique id for this entry
      childPageId: 3, // id of child page
      parentPageId: 1 // id of parent page
    },
    {
      relId: 1,
      childPageId: 4,
      parentPageId: 1
    },
    {
      relId: 2,
      childPageId: 5,
      parentPageId: 1
    },
    {
      relId: 3,
      childPageId: 6,
      parentPageId: 1
    }
  ];

  factory.getParentPageById = function (childId) {
    var relations = pageRelations,
        relParentPage = {},
        parentPage = {};

    childId = 5;

    console.log("Write me");

    for (var i = 0; i < relations.length; i++) {
      // console.log(relations[i]);
    }

    return parentPage;
  };

  factory.getChildPagesById = function (parentId) {
    var relations = pageRelations,
        allPages = factory.getPages(),
        childRelPages = [],
        childPages = [];

    for (var i = 0; i < relations.length; i++) {
      if (parentId === relations[i].parentPageId) {
        childRelPages.push(relations[i]);
      }
    }

    for (var key = 0; key < childRelPages.length; key++) {
      var childRelPage = childRelPages[key];

      for (var index = 0; index < allPages.length; index++) {
        if (childRelPage.childPageId === allPages[index].id) {
          childPages.push(allPages[index]);
        }
      }

    }

    return childPages;
  };

  /**
   * Returns page depth in url structure
   *
   * @param  {int} id Page id of the page you want to know page depth of
   *
   * @return {int}    Page depth
   */
  factory.getPageDepth = function (id) {
    var pages = factory.getPages(),
        page = "",
        brokenString = [],
        depth = 0;

    for (var i = 0; i < pages.length; i++) {
      if (pages[i].id === id) {
        page = pages[i];
        break;
      }
    }

    brokenString = page.href.substr(1).split("/");
    return brokenString.length;
  };

  factory.getPages = function () {
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