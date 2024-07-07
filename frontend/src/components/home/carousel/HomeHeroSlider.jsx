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
  },
  {
    image: grocery,
  },
  {
    image: medical,
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
          return <SliderComponent key={index} image={testimonial.image} />;
        })}
      </Slider>
    </div>
  );
}
