// 	Stripe
// (Assuming you're using express - expressjs.com)
// Get the credit card details submitted by the form

module.exports = {

var stripeToken = request.body.stripeToken;

console.log('stripeToken: ', stripeToken);

var charge = stripe.charges.create({
// her er det hardkodet, så få inn cart objectet her

		amount: 9000, // amount in cents, again
		currency: "usd",
		source: stripeToken,
		description: "Example charge"

	}, function(err, charge) {		

	if (err && err.type === 'StripeCardError') {
			// The card has been declined
	}

	console.log('Charge in the server', charge);


});

}