var Retailer = require('../models/Retailer.js');

module.exports = {
	create: function(req, res) {
		var newRetailer = new Retailer(req.body);

		// lagrer det som skulle komme inn:
		newRetailer.save(function(err, result) {
			if (err) {
				return res.status(500).send(err)
			} else {
				res.send(result);
			}
		});
	},

	read: function(req, res) {
		Retailer.find({}) // the query from the URL
		.exec(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	},

	readId: function(req, res) {
		Retailer.find(req.params.id, function(err, result) {
			// console.log('The ID', req.params);
			

			res.send(req.params); // Params, query ??? Find out!!
		})
		console.log('This is the query', req.params);

		
	},

	update: function(req, res) {
		Retailer.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	},

	delete: function(req, res) {
		Retailer.findByIdAndRemove(req.params.id, function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	}	
}