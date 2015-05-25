// Product model


var mongoose = require('mongoose');

var productSchema = new mongoose.Schema ({
	user: { type: String, unique: true },
	title: { type: String, uniqe: true, required: true, index: true, maxlength: 20 },
	description: { type: String, required: true, maxlength: 200 },
	price: { type: Number, required: true, min: 0 },
	size: {type: String, required: true },
	price: { type: Number, required: true },
	instock: {type: Boolean, required: true },
	retailer: { type: String, required: true }
})

module.exports = mongoose.model('Product', productSchema);