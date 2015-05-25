var app = angular.module('ethicalstore');

app.controller('productIdCtrl', function($scope, productcardService, $stateParams, productData) {

    $scope.showProductData = productData.data;


    
});
