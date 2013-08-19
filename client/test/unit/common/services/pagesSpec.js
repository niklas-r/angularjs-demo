describe("Page service", function() {
  var pageService, location;

  // load the controller's module
  beforeEach(module('services.pages'));

  beforeEach(inject(function(pages, $location) {
    pageService = pages;
    location = $location;
  }));

  it("should have an active page.", function () {
    var activePage;
    location.path("/");

    pageService.setActivePage(location);
    activePage = pageService.getActivePage();

    expect(activePage.title).toBeTruthy();
  });

  
});