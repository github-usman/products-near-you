import React from 'react';

const SliderComponent = ({ image }) => {
  return (
    <div className="slider-component">
      <img
        src={image}
        alt={`all type of image like${image}`}
        height={800}
        width={800}
        className="carousel-image"
      />
    </div>
  );
};

export default SliderComponent;
