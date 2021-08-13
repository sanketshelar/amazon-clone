import React, { Fragment } from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

import Subtotal from './Subtotal';
import { useStateValue } from '../Store/StateProvider';

const Checkout = () => {
  const [{ basket }, dispach] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        {/* <img className='checkout__ad' src={banner} alt='' /> */}

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h2 className='checkout__title'>Shopping Cart</h2>

          {basket.length === 0 ? (
            <h2 style={{ textAlign: 'center', marginTop: '85px' }}>
              Your Amazon Basket is empty
            </h2>
          ) : (
            <Fragment>
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
            </Fragment>
          )}
        </div>
      </div>

      <div className='checkout__right'>
        <img
          className='checkout__banner1'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png'
          alt=''
        />
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
