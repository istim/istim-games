var istimGameControllers = angular.module('phonecatControllers', []);
 
istimGameControllers.controller('gameIndexController', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://localhost:1337/game').success(function(data) {
      $scope.game = data;
    });
 
  }]);
 
istimGameControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);