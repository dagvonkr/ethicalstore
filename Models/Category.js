// Category model


var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema ({
		categoryId: {type: String, required: true}, // fashion, textile, food etc...
		categoryName: {type: String, required: true}, // Men's fashion, Bag's textile, Snacks-food etc...	
		categoryDummyImageUrl: {type: String}
})

module.exports = mongoose.model('Category', categorySchema);