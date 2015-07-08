var app = angular.module('ethicalstore');

app.controller('cartsliderCtrl', function($scope, $rootScope, ngCart, $location) {


    // To hide checkoutbutton in the /checkout view
    // One error: if you refresh on /checkout the button hides in cartslider too
    var locationCheckout;
    if($location.$$url === '/checkout') {
        $scope.locationCheckout = true
    } else if ($location.$$url !== '/checkout') {
        $scope.locationCheckout = false;
    }
	
	  // ngCart
    $scope.ngCart = ngCart;
	
	$scope.leftVisible = false;
    $scope.rightVisible = false;

    $scope.close = function() {
        $scope.leftVisible = false;
        $scope.rightVisible = false;
    };

    $scope.showLeft = function(e) {
        $scope.leftVisible = true;
        e.stopPropagation();
    };

    $scope.showRight = function(e) {
        $scope.rightVisible = true;
        e.stopPropagation();
    }

    $rootScope.$on("documentClicked", _close);
    $rootScope.$on("escapePressed", _close);

    function _close() {
        $scope.$apply(function() {
            $scope.close(); 
        });
    }

  

	

})