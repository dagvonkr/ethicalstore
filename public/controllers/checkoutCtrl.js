var app = angular.module('ethicalstore');

app.controller('checkoutCtrl',function($scope, ngCart, fulfilmentProvider, userInfo) {


	$scope.userInfo = userInfo;

    $scope.ngCart = ngCart;


    console.log('ngCart in controller:', ngCart)

    $scope.checkout = function () {
        fulfilmentProvider.setService($scope.service);
        fulfilmentProvider.setSettings($scope.settings);
        var promise = fulfilmentProvider.checkout();
        console.log(promise);
    }
});
