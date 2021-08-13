import React from 'react';
import { useStateValue } from '../Store/StateProvider';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeItemHandler = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div className='checkout__product'>
      <img className='checkout__img' src={image} alt='' />

      <div className='checkout__info'>
        <p className='checkoutproduct__title'>{title}</p>
        <p className='checkoutproduct__price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div>
          <p className='checkoutproduct__rating'>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </p>
        </div>
        {!hideButton && (
          <button onClick={removeItemHandler}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
