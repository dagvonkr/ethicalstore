// Brand model


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var retailerSchema = new mongoose.Schema ({
		retailerId: {type: String, required: true},
		retailerName: {type: String, required: true},
		mainCategory: {type: Schema.Types.ObjectId, ref: 'Category'}
		// secondCategory: {type: Schema.Types.ObjectId, ref: 'Category'}
})

module.exports = mongoose.model('Retailer', retailerSchema);