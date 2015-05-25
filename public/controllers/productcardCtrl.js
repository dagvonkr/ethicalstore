var app = angular.module('ethicalstore');

app.controller('productcardCtrl', function($scope, productcardService ) {
	
		productcardService.getTestData().then(function(returnFromService) {
      		// console.log(returnFromService)
			$scope.showTestData = returnFromService;
			
		}, function(error) {
			console.log('Funket ikke: ', error);
		});
})