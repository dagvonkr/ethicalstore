var app = angular.module('ethicalstore');

app.controller('checkoutCtrl',function($scope, ngCart, fulfilmentProvider) {




    $scope.ngCart = ngCart;




    console.log('ngCart in controller:', ngCart)

    $scope.checkout = function (user) {
    	console.log('scope user:', user);
    	$scope.user = user;
		console.log('scope cart: ', ngCart);

		fulfilmentProvider.setUserData($scope.user);
        fulfilmentProvider.setService($scope.service);
        fulfilmentProvider.setSettings($scope.settings);
        var promise = fulfilmentProvider.checkout();
        console.log('Promise i ', promise);
    }
});
