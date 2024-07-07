import React, { useContext } from 'react';
import Slider from 'react-slick';
import Productcard from '../productcard/Productcard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { myContext } from '../../context/data/Mycontext';

const Featuredcollection = () => {
  const context = useContext(myContext);
  const { product } = context;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <h2 className="mb-4 ms-4 text-primary">Our Featured Products</h2>
          <div className="slider-container">
            <Slider {...settings}>
              {product.map((item, index) => (
                <div key={index}>
                  <Productcard item={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuredcollection;
