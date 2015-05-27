// Orders model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = require('./Product');

var orderSchema = new mongoose.Schema({
	// embedded both the product info and the customer info 
	nonUserOrderInfo: {
		name: { type: String, required: true, minlength: 3, maxlength: 50},
		email: {type: String, required: true, unique: true},
		adress: {
			shippingadress: {
				street: {type: String, required: true},
				zipcode: {type: String, required: true},
				city: {type: String, required: true},
				country: {type: String, required: true}
				},
			billingadress: {
				street: {type: String, required: true},
				zipcode: {type: String, required: true},
				city: {type: String, required: true},
				country: {type: String, required: true}
			}	
		}
	},	
	// when I post to this db, it will get the whole Product onject from the Product schema	
	productOrders: [{
		product: [Product], // refererer til var Product = require('./Product') MODEL
		quantity: {type: Number} // get the quantity from the front-end
	}],
	date: { type: Date, default: Date.now },

	status: {type: String} // pending, shipped etc 	
});

module.exports = mongoose.model('Order', orderSchema);


