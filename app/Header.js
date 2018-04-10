app.directive('headerHtml', function($rootScope) { 
  return { 
    restrict: 'E', 
    templateUrl: 'view/Common/Header.html' ,
	 controller: ["$scope", "$rootScope", function($scope, $rootScope) {
                
                
                $scope.logoutuserifany = function() {
                    $rootScope.$emit('logoutEvent',{});
                }
            }]
  }; 
});