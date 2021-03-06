
angular.module('ngCart.fulfilment', [])

    // This is just sending you to  either log, http or paypal:
    .service('fulfilmentProvider', ['$injector', function($injector){

        this._obj = {
            service : undefined,
            settings : undefined,
            user: undefined
        };
        this.setUserData = function(user) {
            this._obj.user = user;
        }

        // Velger http for å POSTe order objektet
        this.setService = function(service){
            // console.log('This is setService:', service)
            this._obj.service = service;
        };

        // Dette refererer til endpoint fra directive    
        this.setSettings = function(settings){
            // console.log('Her kommer setSettings:', settings)
            this._obj.settings = settings;
        };

        this.checkout = function(){
            var provider = $injector.get('ngCart.fulfilment.' + this._obj.service);
            console.log('The provider:', provider);
              return provider.checkout(this._obj.settings, this._obj.user);

        }

    }])





// This is only for logging so you can debugging:
.service('ngCart.fulfilment.log', ['$q', '$log', 'ngCart', function($q, $log, ngCart){

        this.checkout = function(){
            var deferred = $q.defer();
            $log.info(ngCart.toObject());
            deferred.resolve({
                cart: ngCart.toObject()
            });
            return deferred.promise;
        }
 }])



.service('ngCart.fulfilment.http', ['$http', 'ngCart', function($http, ngCart){
         // ngCart kommer her med det det skal. 

    this.checkout = function(settings, user){

        var order = ngCart.$cart.items;

        console.log('Postin order object to server', orderObj);

        console.log('Settings', settings);

        var orderObj = {}

        orderObj['productOrders.product'] = order;  
        orderObj['userInfo.name'] = user.shipname;
        orderObj['userInfo.email'] = user.email;
        orderObj['userInfo.address.shippingaddress.street'] = user.shipadress;
        orderObj['userInfo.address.shippingaddress.zipcode'] = user.shipzip;
        orderObj['userInfo.address.shippingaddress.city'] = user.shipcity;



        return $http({
            method: 'POST',
            url: settings.url,
            data: orderObj 
        })
    

    }
 }])


.service('ngCart.fulfilment.paypal', ['$http', 'ngCart', function($http, ngCart){



}]);
