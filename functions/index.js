const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51JMClNSGZNLR40pvnQE7zOuJPoASK4gwrXu0vzJYTBMIXIA2h5ceJRFumslTQqJaEmk0N4EnmKWGJm12Hu6Wntpo00WYZhPLF4'
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//Api route
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('Payment request recieved Boom!!>>>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'inr',
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/clone-d3976/us-central1/api
