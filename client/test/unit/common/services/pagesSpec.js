describe("Page service", function() {
  var pageService;

  beforeEach(module('services.pages'));

  beforeEach(function() {

    inject(function ($injector) {
      pageService = $injector.get('pages');
    });

  });

  it("should get all pages", function () {
    var pages = pageService.getPages();
    expect(pages).toEqual(jasmine.any(Array));
  });

  it("should get specific page", function () {
    var page = pageService.getPageById(0);

    expect(page.title).toEqual("Hem");
  });

  it("should set/get active page", inject(function ($location) {
    var activePage;

    $location.path("/");
    setActivePage = pageService.setActivePage($location);

    expect(setActivePage.title).toEqual("Hem");
  }));

  it("should get active page", inject(function ($location) {
    $location.path("/");

    pageService.setActivePage($location);
    
    getActivePage = pageService.getActivePage();

    expect(getActivePage.title).toEqual("Hem");
  }));
});