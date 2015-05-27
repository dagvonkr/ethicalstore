// Product model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new mongoose.Schema ({
	id: {type: String, required: true, unique: true}, //category_retailer_title, dette vil bli generert automatisk etterhvert
	title: { type: String, unique: true, required: true, index: true, maxlength: 50 },
	description: { type: String, required: true, maxlength: 200 },
	price: { type: Number, required: true, min: 0 },
	size: {type: String},
	color: {type: String},
	itemsInStock: {type: Number, required: true},
	// inStock: {type: Boolean, required: true }, 
	// Jeg har ant items in stock som kan bli false om det er > 0 
	category: {type: Schema.Types.ObjectId, ref: 'Category'},
	// Feil: er det fordi det er et array (det refererer ikke til et array)
	retailer: {type: Schema.Types.ObjectId, ref: 'Retailer'}
})


module.exports = mongoose.model('Product', productSchema);