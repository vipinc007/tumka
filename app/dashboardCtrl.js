

app.service('filteredListService', function () {
     
    
    this.searched = function (valLists,toSearch) {
		//alert('searched');
        return _.filter(valLists, 
        function (i) {
            /* Search Text in all 3 fields */
            return searchUtil(i, toSearch);
        });        
    };
    
    this.paged = function (valLists,pageSize)
    {
		//alert('paged');
        retVal = [];
        for (var i = 0; i < valLists.length; i++) {
            if (i % pageSize === 0) {
                retVal[Math.floor(i / pageSize)] = [valLists[i]];
            } else {
                retVal[Math.floor(i / pageSize)].push(valLists[i]);
            }
        }
        return retVal;
    };
 
});

var dashboardCtrl = app.controller('dashboardCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data, $filter, filteredListService) {
    //initially set those objects to null to avoid undefined error
	$scope.pageSize = 5;

   $scope.songData =[];
   $scope.allItems = $scope.songData;
   $scope.reverse = false;
   var audioElement = document.createElement('audio');
 
    $scope.resetAll = function () {
        $scope.filteredList = $scope.allItems;
        $scope.searchText = '';
        $scope.currentPage = 0;
        $scope.Header = ['','',''];
    }
	
    
	
	function LoadSongs()
	{
		Data.toast({"status":"success","message":"Loading songs"});
		
			Data.get('songs.json').then(function (results) {	
                $scope.songData = results.Data;
				$scope.allItems = $scope.songData;
				$scope.search();
            });
			


	}
	
	$scope.play = function(song){
		angular.forEach($scope.filteredList, function(item) {
			  item.Playing = false;
			});
		//alert(code);
		song.Playing = true;
		audioElement.setAttribute('src', song.Url);
		audioElement.play();
		Data.toast({"status":"success","message":"Playing:"+song.Title});
	}
	$scope.stop = function(song){
		song.Playing = false;
		audioElement.setAttribute('src', "");
	}
	$scope.pause = function(song){
		song.Paused = true;
		audioElement.pause();
	}
	$scope.resume = function(song){
		song.Paused = false;
		audioElement.play();
	}
	
	

    $scope.search = function () {
        $scope.filteredList = 
       filteredListService.searched($scope.allItems, $scope.searchText);
        
        if ($scope.searchText == '') {
            $scope.filteredList = $scope.allItems;
        }
        $scope.pagination(); 
    }
	


    // Calculate Total Number of Pages based on Search Result
    $scope.pagination = function () {
        $scope.ItemsByPage = filteredListService.paged( $scope.filteredList, $scope.pageSize );         
    };

    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };

    $scope.firstPage = function () {
        $scope.currentPage = 0;
    };

    $scope.lastPage = function () {
        $scope.currentPage = $scope.ItemsByPage.length - 1;
    };

    $scope.range = function (input, total) {
        var ret = [];
        if (!total) {
            total = input;
            input = 0;
        }
        for (var i = input; i < total; i++) {
            if (i != 0 && i != total - 1) {
                ret.push(i);
            }
        }
        return ret;
    };
    
	

	
    $scope.sort = function(sortBy){
		//alert(sortBy);
        $scope.resetAll();  
        
        $scope.columnToOrder = sortBy; 
             
        //$Filter - Standard Service
        $scope.filteredList = $filter('orderBy')($scope.filteredList, $scope.columnToOrder, $scope.reverse); 

        if($scope.reverse)
             iconName = 'glyphicon glyphicon-chevron-up';
         else
             iconName = 'glyphicon glyphicon-chevron-down';
              
        if(sortBy === 'Title')
        {
            $scope.Header[0] = iconName;
        }
        else if(sortBy === 'Title')
        {
            $scope.Header[1] = iconName;
        }else {
            $scope.Header[2] = iconName;
        }
         
        $scope.reverse = !$scope.reverse;   
        
        $scope.pagination();    
    };
    
    //By Default sort ny Name
     $scope.sort ('Title');  
	
	LoadSongs();
});

dashboardCtrl.$inject = ['$scope', '$filter','filteredListService'];

function searchUtil(item, toSearch) {
    /* Search Text in all 3 fields */
    return (item.Title.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 ) ? true : false;
}