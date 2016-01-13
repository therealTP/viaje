trvlApp.directive('menuBar', function() {
  return {
    templateUrl: 'app/directives/menuBar/menuBarTmpl.html',
    restrict: 'E',
    scope: {
      userData: '=',
      currData: '='
    },
    controller: 'menuBarCtrl'
  };
});
