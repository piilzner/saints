var app=angular.module("starter",["ionic"]).run(function(t){t.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),window.StatusBar&&StatusBar.styleDefault()})}).config(function(t,e,a,o){o.views.transition("fade-in"),t.state("home",{url:"/",templateUrl:"views/home.html",controller:"homeCtrl"}).state("team",{url:"/team",templateUrl:"views/team.html",controller:"teamCtrl"}),e.otherwise("/")});