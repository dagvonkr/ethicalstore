var app = angular.module('ethicalstore');

app.controller('categoryCtrl', function($scope, productcardService, $stateParams) {

	productcardService.getCategoryData().then(function(returnFromService) {

		$scope.showCategories = returnFromService

	}) 

});
