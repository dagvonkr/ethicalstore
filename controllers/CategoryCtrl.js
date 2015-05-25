var Category = require('../models/Category.js');

module.exports = {
	create: function(req, res) {
		var newCategory = new Category(req.body);

		// lagrer det som skulle komme inn:
		newCategory.save(function(err, result) {
			if (err) {
				return res.status(500).send(err)
			} else {
				res.send(result);
			}
		});
	},

	read: function(req, res) {
		Category.find({})
		.populate('retailer')
		.exec(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	},

	readId: function(req, res) {
		Category.find(req.params.id, function(err, result) {
			// console.log('The ID', req.params);
			res.send(req.params); // Params, query ??? Find out!!
		})
		console.log('This is the query', req.params);

		
	},

	update: function(req, res) {
		Category.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	},

	delete: function(req, res) {
		Category.findByIdAndRemove(req.params.id, function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	}	
}