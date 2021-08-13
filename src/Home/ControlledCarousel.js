import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';
import './ControlledCarousel.css';

export const ControlledCarousel = () => {
  return (
    <Fragment>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='home__img'
            src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/StylebazaarJuly/GWnew/1._CB664790842_.jpg'
            alt='home'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='home__img'
            src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/Herotator/WFH/Offer/V2/WFH-Herotator-hero_3000x1200._CB405299567_.jpg'
            alt='home'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='home__img'
            src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Mi11Ultra/GW/Salelive/D22087666_WLD_Xiaomi_Mi11_Ultra_NewLaunch_tallhero_3000x1200._CB664623797_.jpg'
            alt='home'
          />
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default ControlledCarousel;
