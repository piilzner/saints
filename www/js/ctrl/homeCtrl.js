app.controller('homeCtrl', ['$scope', '$http', '$state', 'team', function ($scope, $http, $state, team) {
 
   $http.get('js/players.json').then(function(data){

    console.log(data);

    $scope.players = data.data;

   });


  $scope.rankOne = [];
  $scope.rankTwo = [];
  $scope.rankThree = [];

  var blueTeam = [];
  var whiteTeam = [];
  var blue = true;


   $scope.generate = function(){

    var isChecked = $('.attending');

    for(var i = 0; i < isChecked.length; i++){

      if($(isChecked[i]).is(":checked")){

        for(var j = 0; j < $scope.players.length; j++){

          if($scope.players[j].name == $(isChecked[i]).val()){
            console.log($scope.players[j].rating);

            switch($scope.players[j].rating){
              case "1":
              console.log("a");
                $scope.rankOne.push($scope.players[j].name);
                break;
              case "2":
                $scope.rankTwo.push($scope.players[j].name);
                break;
              case "3":
                $scope.rankThree.push($scope.players[j].name);
                break;
            }
          }
        }
      }      
    }
      createTeams();
   }

   function createTeams(){
    
    var one = Math.floor(Math.random()*$scope.rankOne.length),
        two = Math.floor(Math.random()*$scope.rankTwo.length),
        three = Math.floor(Math.random()*$scope.rankThree.length);
    if(blue){

      blueTeam.push($scope.rankOne[one]);
      blueTeam.push($scope.rankTwo[two]);
      blueTeam.push($scope.rankThree[three]);
      //blue = false;
    }else{
      whiteTeam.push($scope.rankOne[one]);
      whiteTeam.push($scope.rankTwo[two]);
      whiteTeam.push($scope.rankThree[three]);
      //blue = true;
    }
    $scope.rankOne.splice(one, 1);
    $scope.rankTwo.splice(two, 1);
    $scope.rankThree.splice(three, 1);

    blue = !blue;
    if($scope.rankOne.length == 0 && $scope.rankTwo.length == 0 && $scope.rankThree.length == 0){
      console.log("Blue : ", blueTeam.filter(Boolean), "white: ",whiteTeam.filter(Boolean));
      team.setTeams({"blue": blueTeam.filter(Boolean), "white": whiteTeam.filter(Boolean)});
      $state.transitionTo("team");
    }
    else createTeams();
   }
    
}]);

