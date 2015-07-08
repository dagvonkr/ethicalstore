var app = angular.module('ethicalstore');

app.controller('checkoutCtrl',function($scope, ngCart, fulfilmentProvider, $window, $location) {

    $scope.ngCart = ngCart;
    console.log('ngCart in controller:', ngCart);


    $scope.checkout = function () {

		fulfilmentProvider.setUserData($scope.user);
        fulfilmentProvider.setService($scope.service);
        fulfilmentProvider.setSettings($scope.settings);
        var promise = fulfilmentProvider.checkout();
        console.log('Promise i ', promise);
    }

        // Stripe  Jeg kan kanskje droppe dette når server er oppe. Jeg legger in KEY der (var stripe)
    $window.Stripe.setPublishableKey('pk_test_Ru5JRV5fT7E4CTvbhDN4ZddW');


    $scope.stripeCallback = function (code, result) {
        console.log('Result', result);
        if (result.error) {
            window.alert('Could not find your card. Error code: ' + result.error.message);
        } else {
            window.alert('Success! You have been chared. Transaction token: ' + result.id);
        }
    };

});
