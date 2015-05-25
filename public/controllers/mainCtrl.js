var app = angular.module('ethicalstore');

app.controller('mainCtrl', function($scope, $rootScope, $location, productSearchService) {

	// Search engine:

	// Noen initial valg, har ingen stor betydning:
	var initChoices = ["jeans", "sweather", "socks", "bags"];
	var idx = Math.floor(Math.random() * initChoices.length);


	$scope.products = []; // Results to display
	$scope.page = 0 // counter of current page
	$scope.allResults = false; // Whether or not all results have been found

	 // And, a random search term to start if none was present on page load.
  	$scope.searchTerm = $location.search().q || initChoices[idx];

  	
    //A fresh search. Reset the scope variables to their defaults, set
    //the q query parameter, and load more results.
   
  	$scope.search = function() {
    	$scope.page = 0;
    	$scope.products = [];
    	$scope.allResults = false;
    	$location.search({'q': $scope.searchTerm});
    	// $scope.loadMore();
  	};


    //Load the next page of results, incrementing the page counter.
    //When query is finished, push results onto $scope.recipes and decide
    // whether all results have been returned (i.e. were 10 results returned?)
   
  // 	$scope.loadMore = function() {
  //   	products.search($scope.searchTerm, $scope.page++).then(function(results) {
  //     	if (results.length !== 10) {
  //       	$scope.allResults = true;
  //     	}
 
  //     	var ii = 0;
 
  //     	for (; ii < results.length; ii++) {
  //       	$scope.products.push(results[ii]);
  //     		}
  //   	});
  // 	};
 
  // // Load results on first run
  // 	$scope.loadMore();

  // !Search engine

  // cartslider 

  // !cartslider

});

