// NODE

var Product = require('../models/Product.js');

module.exports = {
	create: function(req, res) {
		var newProduct = new Product(req.body);

		// lagrer det som skulle komme inn:
		newProduct.save(function(err, result) {
			if (err) {
				return res.status(500).send(err)
			} else {
				res.send(result);
			}
		});
	},

	read: function(req, res) {
		Product.find({}) // the query from the URL. NB: find --> finner alle. Derfor findOne på neste. Kan med andre ord ikke bruke dette til å linke produkt side.
		.populate('category') // må bruke populate for å få ut den refererte objektet fra den andre databasen
		.populate('retailer') 
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
		Product.findOne(req.params, function(err, result) { // findOne bare det ene objektet i stede for hele databasen
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result); // hvor sendes result ? $q service ? 
				// console.log('Result i db:', result, ', dette funker');
			}
			// console.log('req.params: ', req.params);	
			// console.log('This is the result:', result);
		})
		.populate('category')
		.populate('retailer')
	},
		// console.log('The ID', req.params);
		// må fjerne space og storebokstaver fra title for at den skal funke i id url'en
		// var makeIdFromTitle = function(title) {   }
		// var productid = req.body.category + '_' + req.body.retailer + '_' + req.body.id;
		// console.log('Her er req.params.id:', req.params.id);
		// console.log('req.params: ', req.params);	



	update: function(req, res) {
		Product.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	},

	delete: function(req, res) {
		Product.findByIdAndRemove(req.params.id, function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	}	
}