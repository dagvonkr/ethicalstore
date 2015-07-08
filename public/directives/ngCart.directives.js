'use strict';


angular.module('ngCart.directives', ['ngCart.fulfilment'])

    // .controller('CartController',['$scope', 'ngCart', function($scope, ngCart) {
    //     $scope.ngCart = ngCart;
    // }])

    .directive("cart", function() {
    return {
        restrict: "E",
        template: "<div ng-class='{ show: visible, left: alignment === \"left\", right: alignment === \"right\" }' ng-transclude></div>",
        transclude: true,
        scope: {
            visible: "=",
            alignment: "@"
            }
        };
    })

    .directive('ngcartAddtocart', ['ngCart', function(ngCart){
        return {
            restrict : 'E',
            controller : 'cartsliderCtrl',
            scope: {
                id:'@',
                name:'@',
                quantity:'@',
                quantityMax:'@',
                price:'@',
                data:'='
            },
            transclude: true,
            templateUrl: 'directives/addtocart.html',
            link:function(scope, element, attrs){
                scope.attrs = attrs;
                scope.inCart = function(){
                    return  ngCart.getItemById(attrs.id);
                };

                if (scope.inCart()){
                    scope.q = ngCart.getItemById(attrs.id).getQuantity();
                } else {
                    scope.q = parseInt(scope.quantity);
                }

                scope.qtyOpt =  [];
                for (var i = 1; i <= scope.quantityMax; i++) {
                    scope.qtyOpt.push(i);
                }

            }

        };
    }])

    .directive('ngcartCart', [function(){
        return {
            restrict : 'EA',
            controller : 'cartsliderCtrl',
            scope: {},
            templateUrl: 'directives/cart.html',
            link:function(scope, element, attrs){

            }
        };
    }])

    .directive('ngcartSummary', [function(){
        return {
            restrict : 'E',
            controller : 'cartsliderCtrl',
            scope: {},
            transclude: true,
            templateUrl: 'directives/summary.html'
        };
    }])

    .directive('ngcartCheckout', [function(){
        return {
            restrict : 'E',
            controller : 'checkoutCtrl',
            scope: {
                service:'@',
                settings:'=',
                user: '='
            },
            transclude: true,
            templateUrl: 'directives/checkout.html'
        };
    }]);