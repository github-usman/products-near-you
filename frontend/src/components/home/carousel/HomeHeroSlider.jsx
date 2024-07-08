'use client';

import React from 'react';
import Slider from 'react-slick';
import SliderComponent from './SliderComponent';
import dairy from '../../../assets/media/images/carousel-img/dairy.jpg';
import grocery from '../../../assets/media/images/carousel-img/grocery.jpg';
import medical from '../../../assets/media/images/carousel-img/medical.jpg';

const testimonialsList = [
  {
    image: dairy,
    sale_discount: 'Opening Sale Discount 2%',
    sale_title: 'Dairy Shop For Fresh Milk',
    sale_para:
      'Introduced a new model for online Check for product availablity near in your city for your convenient and less price ₹',
  },
  {
    image: grocery,
    sale_discount: 'Opening Sale Discount 3%',
    sale_title: 'Availablity all grocery at low cost',
    sale_para:
      'Introduced a new model for online Check for product availablity near in your city for your convenient and less price ₹',
  },
  {
    image: medical,
    sale_discount: 'Opening Sale Discount 5%',
    sale_title: 'Be healthy, get any Medicine!',
    sale_para:
      'Introduced a new model for online Check for product availablity near in your city for your convenient and less price ₹',
  },
];

export default function HomeHeroSlider() {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="home-hero-carousel">
      <Slider {...settings}>
        {testimonialsList.map((testimonial, index) => {
          return <SliderComponent key={index} testimonial={testimonial} />;
        })}
      </Slider>
    </div>
  );
}
