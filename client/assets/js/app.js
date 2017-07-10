var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/main.html',
    })
	.otherwise({
		redirectTo: '/'
	})
});