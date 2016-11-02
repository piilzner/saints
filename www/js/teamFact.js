app.factory('team', function() {
    
	var teams = {};
    return {
        getTeams: function() {
        	return teams;
        },
        setTeams: function(data){
        	teams = data;
        },
        resetTeam: function(){
        	teams = {};
        }
    };

});