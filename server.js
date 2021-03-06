var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_9CiigOkruS6xHR23zzndbFgX");





// include controller
var ProductCtrl = require('./controllers/ProductCtrl');
var CategoryCtrl = require('./controllers/CategoryCtrl');
var RetailerCtrl = require('./controllers/RetailerCtrl');
var OrderCtrl = require('./controllers/OrderCtrl.js')
// var StripeCtrl = require('./controllers/StripeCtrl.js')

var port = 8080;
var app = express();


// middelware
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.json()); // stringifying JSON 







// endpoints
app.post('/product', ProductCtrl.create);
app.get('/product', ProductCtrl.read);
app.get('/api/product/:id', ProductCtrl.readId);
app.put('/api/product/:id', ProductCtrl.update);
app.delete('/api/product/:id', ProductCtrl.delete);

app.post('/category', CategoryCtrl.create);
app.get('/category', CategoryCtrl.read);
app.get('/api/category/:id', CategoryCtrl.readId);
app.put('/api/category/:id', CategoryCtrl.update);
app.delete('/api/category/:id', CategoryCtrl.delete);

app.post('/retailer', RetailerCtrl.create);
app.get('/retailer', RetailerCtrl.read);
app.get('/api/retailer/:id', RetailerCtrl.readId);
app.put('/api/retailer/:id', RetailerCtrl.update);
app.delete('/api/retailer/:id', RetailerCtrl.delete);

app.post('/order', OrderCtrl.create);
app.get('/order', OrderCtrl.read);
app.get('/api/order:id', OrderCtrl.readId);
app.put('/api/order:id', OrderCtrl.update);
app.delete('/api/order:id', OrderCtrl.delete);





// mongodb
var mongoUri = 'mongodb://localhost:27017/ethicalstore';
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('connected to mongodb at', mongoUri);
});

// port
app.listen(port, function() {
	console.log('We are listenin to:', port);
});

// to get i to host 
// app.listen(process.env.EXPRESS_PORT || 8080);

