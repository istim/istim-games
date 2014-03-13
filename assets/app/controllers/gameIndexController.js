var istimGames = angular.module('istimGames', []);

function gameIndexController($scope, $http) {
	$scope.formData = {};
	$scope.games = [];

	// when landing on the page, get all games and show them
	$http.get("http://localhost:1337/game")
		.success(function(data) {
			$scope.games = data;
			console.log("DATA -> "+data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	$scope.publish = function() {
		$http.post("http://localhost:1337/game/create", $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
}
