import React from 'react';
import './Product.css';
import { useStateValue } from '../Store/StateProvider';

const Product = ({ id, title, price, rating, imgsrc }) => {
  const [{ basket }, dispatch] = useStateValue();

  // console.log('basket:', basket);

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: imgsrc,
      },
    });
  };
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>

      <div className='product__rating'>
        <p>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>
      </div>

      <img src={imgsrc} alt='' />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
