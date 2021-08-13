import React from 'react';
import './Home.css';
import Product from './Product';
// import ControlledCarousel from './ControlledCarousel';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__img'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />

        <div className='home__row'>
          <Product
            id='p1'
            title='Funskool Games Chess Set, Black and White'
            price={212.0}
            rating={4}
            imgsrc='https://images-na.ssl-images-amazon.com/images/I/81UP0xeBXhL._SX522_.jpg'
          />
          <Product
            id='p2'
            title='AmazonBasics 80cm (32 inch) Fire HD Ready LED Smart TV AB32E10SS (Black) (2020 Model)'
            price={(15, 899.0)}
            rating={2}
            imgsrc='https://images-na.ssl-images-amazon.com/images/I/613VLxnkEWS._SX522_.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            id='p3'
            title='AmazonBasics 670 L French Door Refrigerator'
            price={(69, 999.0)}
            rating={3}
            imgsrc='https://images-na.ssl-images-amazon.com/images/I/51rWeZEjUdL._SX679_.jpg'
          />

          <Product
            id='p4'
            title='Mens Cotton Face Mask (Pack of 4)'
            price={500.0}
            rating={4}
            imgsrc='https://images-na.ssl-images-amazon.com/images/I/41Bd7RHQQHL._UX679_.jpg'
          />

          <Product
            id='p5'
            title='Cricket 19 International Edition (PS4)'
            price={(2, 199.0)}
            rating={5}
            imgsrc='https://images-na.ssl-images-amazon.com/images/I/71PxCV5Q2JL._SX569_.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            id='p6'
            title='AveLom Seersucker Duvet Cover Set Queen Size (90 x 90 inches), 3 Pieces (1 Duvet Cover + 2 Pillow Cases)'
            price={2310.0}
            rating={1}
            imgsrc='https://images-na.ssl-images-amazon.com/images/I/71QDVTUW4LL._AC_SX679_.jpg'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
