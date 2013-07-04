/*global angular*/
(function (){
  var app = angular.module('app', ['app.homeController']),
      users = [],
      controllers = {},
      factories = {};

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'homeController',
        templateUrl: '/partials/index.html'
      })
      .when('/users', {
        controller: 'usersController',
        templateUrl: '/partials/userList.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  factories.userFactory = function () {
    var factory = {},
        users = [];

    users = [
      { id: 0, name: "Niklas", age: 24},
      { id: 1, name: "Tom", age: 20},
      { id: 2, name: "Stina", age: 19}
    ];

    factory.getUsers = function () {
      return users;
    };

    factory.delUser = function () {
      console.log("Delete user");
    };

    return factory;
  };

  controllers.usersController = function ($scope, userFactory) {
    $scope.users = [];

    var init = function () {
      $scope.users = userFactory.getUsers();
    };
    init();

    $scope.addUser = function () {
      $scope.users.push({
        id: $scope.users.length - 1,
        name: $scope.newUserName,
        age: $scope.newUserAge
      });

      $scope.newUserName = '';
      $scope.newUserAge = '';
    };

    $scope.removeUser = function (user) {
      var id = user.id;

      angular.forEach($scope.users, function (person) {
        if (id == person.id) {
          $scope.users.splice(id, 1);
        }
      });
    };
  };
  
  app.factory(factories);
  app.controller(controllers);
}());