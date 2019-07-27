define("descriptor", [
  ...
], function () {

  ...
  var app = angular.module(moduleName,
    [
      'ui.router',
      'ui.router.upgrade',
      ...
    ]);

  app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);
  
  ...
});
