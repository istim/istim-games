var istimGames = angular.module('istimGames', []);

function achievementsIndexController($scope, $http) {
	$scope.formData = {};
	$scope.achievements = [];

	// when landing on the page, get all games and show them
	$http.get("http://localhost:1337/achievement")
		.success(function(data) {
			$scope.games = data;
			console.log("DATA -> "+data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

}