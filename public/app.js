var app = angular.module('ethicalstore', ['ui.router', 'ui.bootstrap', 'elasticsearch', 'ngCart']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('landingpage', {
		url: '/',
		views: {
			'landingpage' : {
				templateUrl: 'views/landingpage.html',
				controller: 'landingpageCtrl'
			},
			'featured1' : {
				templateUrl: 'views/featured1.html'
			},
			'category' : {
				templateUrl: 'views/category.html',
				controller: 'categoryCtrl'
			}
		}
	})

	.state('products', {
		url: '/products',
		templateUrl: 'views/productcard.html',
		controller: 'productcardCtrl'
	})

	.state('product', {
		url: '/product',
		templateUrl: 'views/product.html'
	})
	.state('product.id', {
		url: '/:id',
		templateUrl: 'views/productid.html',
		controller: 'productIdCtrl',
		// Resolve means you can wait for data to become available before showing a view
		resolve: {
			// productData her snakker direkte med controller --> Når denne promisen blir suksessful blir 
			// i dette tilfellet 'productData' tilgjengelig for controller med det eksakt samme navn.
			productData: function(productcardService, $stateParams) {
				// console.log('$stateParams in app.js:', $stateParams);
				return productcardService.getProductDataId($stateParams.id);
				// må jeg hente objectet her for å kunne populate det spesielle objektet som skal vises?
			} 
		}
	})

	.state('category', {
		url: '/category',
		templateUrl: 'views/category.html',
		controller: 'categoryCtrl'
	})
	.state('category.fashion', {
		url: '/fashion',
		templateUrl: 'views/fashion.html',
		controller: 'categoryCtrl'
	})
	.state('category.accessories', {
		url: '/accesories',
		templateUrl: 'views/accessories.html',
		controller: 'categoryCtrl'
	})
	.state('category.food', {
		url: '/food',
		templateUrl: 'views/food.html',
		controller: 'categoryCtrl'
	})

	.state('checkout', {
		url: '/checkout',
		templateUrl: 'views/checkout.html',
		controller: 'checkoutCtrl' 
	})
});



app.run(function($rootScope) {

	// Her kan jeg kanskje legge inn gestures som gjør at carten slider tilbake når jeg feks legger til et produkt i stede for at det kommer en kopi som nå

    document.addEventListener("keyup", function(e) {
        if (e.keyCode === 27)
            $rootScope.$broadcast("escapePressed", e.target);
    });

    document.addEventListener("click", function(e) {
        $rootScope.$broadcast("documentClicked", e.target);
    });
});
