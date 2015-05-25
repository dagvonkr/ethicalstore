var app = angular.module('ethicalstore');

app.directive("cart", function() {
    return {
        restrict: "E",
        template: "<div ng-class='{ show: visible, left: alignment === \"left\", right: alignment === \"right\" }' ng-transclude></div>",
        transclude: true,
        scope: {
            visible: "=",
            alignment: "@"
        }
    };
});

app.directive("cartYourBag", function() {
     return {
         restrict: "E",
         template: "<div> YOUR BAG </div>",
         transclude: true,
         scope: {
             hash: "@"
         }
     }
});


app.directive("cartItem", function() {
     return {
         restrict: "E",
         template: "cartItem.html",
         transclude: true,
         scope: {
             hash: "@",
             productId: '='
         },
         link: function($scope) {
             $scope.navigate = function() {
                 window.location.hash = $scope.hash;
             }
         }
     }
});



app.directive("cartSubTotal", function() {
     return {
         restrict: "E",
         template: "<div> Subtotal </div>",
         transclude: true,
         scope: {
             hash: "@"
         }
     }
});

app.directive("cartShipping", function() {
     return {
         restrict: "E",
         template: "<div> Shipping </div>",
         transclude: true,
         scope: {
             hash: "@"
         }
     }
});

app.directive("cartTotal", function() {
     return {
         restrict: "E",
         template: "<div> Total </div>",
         transclude: true,
         scope: {
             hash: "@"
         }
     }
});


app.directive("cartCheckout", function() {
     return {
         restrict: "E",
         template: "<div ng-click='navigate()' ng-transclude></div>",
         transclude: true,
         scope: {
             hash: "@"
         },
         link: function($scope) {
             $scope.navigate = function() {
                 window.location.hash = $scope.hash;
             }
         }
     }
});