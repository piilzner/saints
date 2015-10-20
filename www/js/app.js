var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {
  
  $ionicConfigProvider.views.transition('fade-in');
  
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'homeCtrl',
    resolve: { 
      reset: function(team){
        team.resetTeam();
      }
    }
  })
  .state('team', {
    url: '/team',
    templateUrl: 'views/team.html',
    controller: 'teamCtrl'
  });

  $urlRouterProvider.otherwise('/');

});