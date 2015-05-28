var app = angular.module('ethicalstore');

app.service('productcardService', function($http, $q) {

	this.getProductDataId = function(productid) {
		var dfd = $q.defer();
		// console.log('productid som blir passed in: ', productid);
		// hvorfor blir productid kun id'n her. Ikke hele objektet? 
		$http({
			method: 'GET',
			url: '/api/product/' + productid
		}).then(function(result) {

			// console.log('Result object from server id -->', result, '<--');

			if ( result.status === 404) {
				console.log('Det er noe galt med respons fra id')
			} else {
				dfd.resolve(result);
			}
			dfd.reject('Feil med product:id');
		});
		return dfd.promise;
	};

	

	this.getCategoryData = function(result) {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/category/'
		}).then(function(result) {

			// console.log('Result from category db -->', result, '<--');

			if ( result.status === 404) {
				console.log('Det er noe galt med respons fra id')
			} else {
				dfd.resolve(result.data);
			}
			dfd.reject('Feil med product:id');
		});
		return dfd.promise;
	}





	this.getTestData = function(data) {
		var url = '/product';
		var dfd = $q.defer();

		$http({
			method: 'GET',
			url: url
			}).then(function(data) {


				if (data.status === 404) {
					console.log('Couldnt find any products')
				} else {

						dfd.resolve(data.data)
					}			
				dfd.reject("Det er en feil her")
			});
		return dfd.promise;
	};
	
});