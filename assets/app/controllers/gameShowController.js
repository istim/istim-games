var istimGames = angular.module('istimGames', []);

function gameShowController($scope, $http) {
	$scope.formData = {};
	$scope.game;

	console.log($scope.formData);

	// when landing on the page, get all games and show them

	$http.get("http://localhost:1337/game/")
		.success(function(data) {
			$scope.game = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});


}