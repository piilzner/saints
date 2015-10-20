app.controller('teamCtrl', ['$scope', 'team', function ($scope, team) {
 	
  $scope.blueTeam = team.getTeams().blue;
  $scope.whiteTeam = team.getTeams().white;
  console.log($scope.blueTeam);

    
}]);