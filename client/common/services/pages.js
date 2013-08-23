'use strict';
angular.module('services.pages', [])
.factory('pages', function () {
  var factory = {},
      activePage = "",
      getPageRelations,
      getPageRelationshipById,
      getPageByRelationship,
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
      title: "Om denna demo",
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

  /**
   * Get relationship data between pages
   *
   * @return {array} Array containing objects with relationship information
   */
  getPageRelations = function () {
    return pageRelations;
  };

  /**
   * Get relationship data about a page by it's ID
   *
   * @param  {int} pageId Id of the page you want to get relationship data from
   *
   * @return {object}     Object containing relationship data
   */
  getPageRelationshipById = function (pageId) {
    var relPages = getPageRelations(),
        relPage = "";

    for (var i = 0; i < relPages.length; i++) {
      if (relPages[i].childPageId === pageId) {
        relPage = relPages[i];
      }
    }

    return relPage;
  };

  /**
   * Get page data base on relationship
   *
   * @param  {obj|int} rel Either an object returned from 'getPageRelationshipById' or a relationship ID
   *
   * @return {object}      Page object
   */
  getPageByRelationship = function (rel) {
    var relPages = getPageRelations(),
        relPage = "",
        allPages = factory.getPages(),
        page = "",
        relId = "";

    if (angular.isNumber(rel)) {
      relId = rel;
    } else if (angular.isObject(rel) && angular.isNumber(rel.relId)) {
      relId = rel.relId;
    } else {
      throw new TypeError("getPageByRelationship: first param must be either relationship object of relationship ID");
    }

    for (var i = 0; i < relPages.length; i++) {
      if (relId === relPages[i].relId) {
        relPage = relPages[i];
        break;
      }
    }

    for (var index = 0; index < allPages.length; index++) {
      if (relPage.parentPageId === allPages[index].id) {
        page = allPages[index];
        break;
      }
    }

    return page;
  };

  /**
   * Get parent page
   *
   * @param  {int}  childId ID of the page which you want to know the parent of
   * @param  {bool} deep    Tells function if it should keep on traversing
   *                        until there are no more parents. Will return array
   *                        if true.
   *
   * @return {object|array} Page object or array containing multipl page objects
   */
  factory.getParentPageById = function (childId, deep) {
    var relations = getPageRelations(),
        allPages = factory.getPages(),
        relParentPage = {},
        pageRel = "",
        parentPage = "",
        parentPages = [];

    deep = !!deep;

    pageRel = getPageRelationshipById(childId);

    if (pageRel) {
      parentPage = getPageByRelationship(pageRel.relId);
    }

    if (deep && parentPage) {
      while (pageRel) {
        parentPage = getPageByRelationship(pageRel);
        parentPages.push(parentPage);
        pageRel = getPageRelationshipById(parentPage.id);
      }

    }

    if (deep && parentPages) {
      return parentPages;
    } else {
      return parentPage;
    }
  };

  /**
   * Get child pages by page ID. Only goes one child level deep.
   *
   * @param  {int} parentId ID of the page which you want to know the children of.
   *
   * @return {array}        Array of child page objects
   */
  factory.getChildPagesById = function (parentId) {
    var relations = getPageRelations(),
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

  /**
   * Get all pages
   *
   * @return {array} All the pages
   */
  factory.getPages = function () {
    return pageStructure;
  };

  /**
   * Get page by ID
   *
   * @param  {int} id Id of page to get
   *
   * @return {object} Page object
   */
  factory.getPageById = function (id) {
    var pages = factory.getPages(),
        page = "";

    for (var i = 0; i < pages.length; i++) {
      if (pages[i].id === id) {
        page = pages[i];
      }
    }

    return page;
  };

  /**
   * Sets the active page
   *
   * @param  {angular.$location} $location Instance of angulars $location service.
   *
   * @return {object}            Page object
   */
  factory.setActivePage = function ($location) {
    var pages = factory.getPages();

    pages.forEach(function (link) {

      if (link.href === $location.path()) {
        activePage = link;
      }
    });

    return activePage;
  };

  /**
   * Get active page
   *
   * @return {object} Active page object
   */
  factory.getActivePage = function () {
    return activePage;
  };

  return factory;
});