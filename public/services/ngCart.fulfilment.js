
angular.module('ngCart.fulfilment', [])

    .service('takeOrderPutInDatabase', ['$injector', function($injector){

    }])
    
    // CONSOLE LOG ALLE TING SOM SKJER NEDOVER HER.

    // SJEKK MOT CONTROLLER, DET LIGGER I APP.JS 

    // ENDRE OBJEKT SLIK AT DET TAR INN BRUKER INFO

    // HVORDAN STORE BRUKER INFO, ADRESSE ETC..? --> GJØR DET HER SOM VANLIG. 
    // DET ER DETTE SOM ER SERVICEN TIL CHECKOUT SÅ DET ER HER DET SKAL GJØRES
    // SEND SÅ DETTE MED HTTP REQUEST. BETALINGSLØSNINGEN SKAL SKJE SENERE

    // FOR Å FORSTÅ HVA SOM SKJER KAN DET VÆRE LURT Å VED CHECKOUT RETT OG SLETT
    // SENDE BESTILLINGSOBJEKTET OG FORMEN TIL DATABASEN.  


    // I thik this is all for sending further to either log, http or paypal:
    .service('fulfilmentProvider', ['$injector', function($injector){

        this._obj = {
            service : undefined,
            settings : undefined
        };

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
              return provider.checkout(this._obj.settings);

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

        this.checkout = function(settings){

            var order = ngCart.$cart.items;            
            var orderObj = {}

            orderObj['productOrders.product'] = order;   

            console.log('orderObj:', orderObj);

            return $http({
                method: 'POST',
                url: settings.url,
                data: orderObj 
            })
        

        }
 }])


.service('ngCart.fulfilment.paypal', ['$http', 'ngCart', function($http, ngCart){



}]);
