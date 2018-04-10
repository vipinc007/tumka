app.controller('homectrl', function ($scope, $rootScope, $routeParams, $location, $http, Data,$timeout) {
    
	
	$timeout(function() {
      $location.path('/dashboard');
      }, 5000);

    
});