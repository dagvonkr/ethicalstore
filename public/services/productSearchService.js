var app = angular.module('ethicalstore');

app.factory('productSearchService', function($q, esFactory, $location) {

	var client = esFactory({
		host: $location.host() + ':8080'
	});

	//Given a term and an offset, load another round of 10 recipes ina promise

	var search = function(term, offset) {
    var deferred = $q.defer();
    var query = {
      match: {
        _all: term
      }
    };

    client.search({
      index: 'products',
      type: 'product',
      body: {
        size: 10,
        from: (offset || 0) * 10,
        query: query
      }
    }).then(function(result) {
      var ii = 0, hits_in, hits_out = [];
 
      hits_in = (result.hits || {}).hits || [];
 
      for(; ii < hits_in.length; ii++) {
        hits_out.push(hits_in[ii]._source);
      }
 
      deferred.resolve(hits_out);
    }, deferred.reject);
 
    return deferred.promise;
  };
 
  	// Since this is a factory method, we return an object representing the actual service.
  	return {
    	search: search
  	};


});

// NB NB NB NB NB Some Notes on Deployment NB NB NB NB NB

// Deployment is a bit beyond the scope of this article, but if you want
// to take your recipe search live, you need to be careful. Elasticsearch
// has no concept of users or permissions. If you want to prevent just
// anyone from adding or deleting recipes, you’ll need to find some way
// to prevent access to those REST endpoints on your Elasticsearch
// instance. For example, OpenRecipeSearch.com uses nginx as a proxy in
// front of Elasticsearch to prevent outside access to all endpoints but
// recipes/recipe/_search.
