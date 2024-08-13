import React from 'react';

const SliderComponent = ({ testimonial }) => {
  return (
    <div
      className="carousel-image"
      style={{ backgroundImage: `url(${testimonial.image})` }}
      aria-label={`all type of product like ${testimonial.image}`}
    >
      <div
        className="background"
        style={{
          background:
            testimonial.sale_title == 'Be healthy, get any Medicine!'
              ? 'rgba(255, 255, 255, 0.712)'
              : '',
        }}
      >
        <div className="slider-content">
          <p>{testimonial.sale_discount}</p>
          <h2>{testimonial.sale_title}</h2>
          <p>{testimonial.sale_para}</p>
          <button>Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
