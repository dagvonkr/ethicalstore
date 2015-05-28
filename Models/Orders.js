// Orders model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// tok vekk denne da jeg ikke embedder likevel ?? 
// var Product = require('./Product');

var orderSchema = new mongoose.Schema({
	// embedded both the product info and the customer info 
	userInfo: {
		name: { type: String, required: true, minlength: 3, maxlength: 50},
		email: {type: String, required: true, index: true},
		address: {
			shippingaddress: {
				street: {type: String, required: true},
				zipcode: {type: String, required: true},
				city: {type: String, required: true}
				// country: {type: String, required: true}
				}
			// billingaddress: {
			// 	street: {type: String, required: true},
			// 	zipcode: {type: String, required: true},
			// 	city: {type: String, required: true},
			// 	country: {type: String, required: true}
			// }	
		}
	},	
	// when I post to this db, it will get the whole Product onject from the Product schema	
	productOrders: {
		product: [{
			_id: {type: String, required: true},
			_name: { type: String, required: true },
			_price: { type: Number, required: true },
			_quantity: { type: Number, required: true }  
		}], // refererer til var Product = require('./Product') MODEL
	},
	date: { type: Date, default: Date.now },

	status: {type: String, default: 'pending'} // pending, shipped etc 	
});

module.exports = mongoose.model('Order', orderSchema);


