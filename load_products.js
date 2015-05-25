var fs = require('fs');
var es = require('elasticsearch');
var client = new es.Client({
  host: 'localhost:8080'
});
 
// recipeitems-latest.json

fs.readFile('localhost:8080/product', {encoding: 'utf-8'}, function(err, data) {
  if (err) { throw err; }
 
  // Build up a giant bulk request for elasticsearch.
  bulk_request = data.split('\n').reduce(function(bulk_request, line) {
    var obj, product;
 
    try {
      obj = JSON.parse(line);
    } catch(e) {
      console.log('Done reading');
      return bulk_request;
    }


 // Rework the data slightly
    object = {
      id: obj._id.$oid, // Was originally a mongodb entry
      title: obj.title,
      retailer: obj.retailer,
      url: obj.url,
      description: obj.description.split('\n'),
    };
 
    bulk_request.push({index: {_index: 'products', _type: 'product', _id: product.id}});
    bulk_request.push(product);
    return bulk_request;
  }, []);
 
  // A little voodoo to simulate synchronous insert
  var busy = false;
  var callback = function(err, resp) {
    if (err) { console.log(err); }
 
    busy = false;
  };
 
  // Recursively whittle away at bulk_request, 1000 at a time.
  var perhaps_insert = function(){
    if (!busy) {
      busy = true;
      client.bulk({
        body: bulk_request.slice(0, 1000)
      }, callback);
      bulk_request = bulk_request.slice(1000);
      console.log(bulk_request.length);
    }
 
    if (bulk_request.length > 0) {
      setTimeout(perhaps_insert, 10);
    } else {
      console.log('Inserted all records.');
    }
  };
 
  perhaps_insert();
});    