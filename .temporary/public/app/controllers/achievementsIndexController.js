var istimGames = angular.module('istimGames', []);

function achievementsIndexController($scope, $http) {
	$scope.formData = {};
	$scope.achievements = [];
	

	// when landing on the page, get all games and show them
	$http.get("http://www.istim-games.nodejitsu.com/achievement")
		.success(function(data) {
			$scope.achievements = data;
			console.log("DATA -> "+data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

}