// NODE
var Order = require('../models/Orders.js');

module.exports = {
	create: function(req, res) {
		var newOrder = new Order(req.body);

		// lagrer det som skulle komme inn:
		newOrder.save(function(err, result) {
			if (err) {
				return res.status(500).send(err)
			} else {
				res.send(result);
			}
		});
	},

	read: function(req, res) {
		Order.find({}) // the query from the URL. NB: find --> finner alle. Derfor findOne på neste. Kan med andre ord ikke bruke dette til å linke produkt side.
		// .limit(10)
		// .skip()
		.exec(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
				// console.log(result);
			}
		});

	},

	readId: function(req, res) {
		// Her betyr vel req.params.id at den finner objectet me ID, ikke finner ID. Den sender hele resultatet. Logen til results viser det. 
		Order.findOne(req.params, function(err, result) { // findOne bare det ene objektet i stede for hele databasen
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result); // hvor sendes result ? $q service ? 
				console.log('Result i db:', result, ', dette funker');
			}
		})

	},

	update: function(req, res) {
		Order.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	},

	delete: function(req, res) {
		Order.findByIdAndRemove(req.params.id, function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	}	
}