var istimGames = angular.module('istimGames', [
  'ngRoute',
  'gamecatControllers'
]);
 
istimGames.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/game', {
        templateUrl: 'views/index.html',
        controller: 'gameIndexController'
      }).
      when('/game/:gameId', {
        templateUrl: 'views/gameShow.html',
        controller: 'gameDetailCtrl'
      }).
      otherwise({
        redirectTo: '/game'
      });
  }]);