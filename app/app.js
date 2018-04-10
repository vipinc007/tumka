var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster','ngTable']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/dashboard', {
                title: 'Dashboard',
                templateUrl: 'view/dashboard.html',
				controller: 'dashboardCtrl'
            })
            .when('/', {
                 title: 'home',
                templateUrl: 'view/home.html',
                controller: 'homectrl',
                role: '0' 
            })
            .otherwise({
                redirectTo: '/'
            });
  }])
