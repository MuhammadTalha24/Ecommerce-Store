
import React from "react";
import Slider from "react-slick";
import Productcard from "../productcard/Productcard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Featuredcollection = () => {
  var settings = {
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
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    
    <div className="container py-5">
    <div className="row">
    <div className="col-md-12">
    <h2 className="mb-4 ms-4 text-primary">Our Featured Products</h2>
    <div className="slider-container">
      <Slider {...settings}>
        <div >
        <Productcard/>        
        </div>
        <div>
        <Productcard/> 
        </div>
        <div>
        <Productcard/> 
        </div>
        <div>
        <Productcard/> 
        </div>
        <div>
        <Productcard/> 
        </div>
        <div>
        <Productcard/> 
        </div>
        <div>
        <Productcard/> 
        </div>
        <div>
        <Productcard/> 
        </div>
      </Slider>
    </div>
            </div>
        </div>
    </div>
    </>
   
  );
}

export default Featuredcollection;
