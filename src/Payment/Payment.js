import React, { useState, useEffect } from 'react';
import { useStateValue } from '../Store/StateProvider';
import './Payment.css';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import axios from '../axios';
import { useHistory } from 'react-router';
import { db } from '../firebase';

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  // console.log('The secret is', clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent=paymentConfirmation

        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET',
        });

        history.replace('/orders');
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.messege : '');
  };

  return (
    <div>
      <div className='payment'>
        <div className='payment__container'>
          <h2>
            Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
          </h2>

          {/* Payment Section-delievery address */}
          <div className='payment__section'>
            <div className='payment__title'>
              <h4>Delivery Address</h4>
            </div>
            <div className='payment__address'>
              <p>
                <b>{user?.email}</b>
              </p>
              <p>304,Tarangan Building</p>
              <p>Palghar</p>
            </div>
          </div>

          {/* Payment Section-Product info */}
          <div className='payment__section'>
            <div className='payment__title'>
              <h4>Review items & Delivery</h4>
            </div>
            <div className='payment__items'>
              {basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>

          {/* Payment Section-Payment Method */}
          <div className='payment__section'>
            <div className='payment__title'>
              <h4>Payment Details</h4>
            </div>
            <div className='payment__details'>
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className='payment__priceContainer'>
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <p>
                          <h4>Order Total: {value}</h4>
                        </p>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'₹'}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                  </button>
                </div>

                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
