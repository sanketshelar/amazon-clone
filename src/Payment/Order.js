import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

const Order = ({ order }) => {
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY,h:mma')}</p>
      <p className='order__id'>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              <h4 className='order__total'>Order Total:{value}</h4>
            </p>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
    </div>
  );
};

export default Order;
