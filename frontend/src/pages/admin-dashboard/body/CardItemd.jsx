import React from 'react';

const CardItemd = ({ details }) => {
  return (
    <div
      className="card__admin__dashboard"
      style={{ backgroundColor: details.color }}
    >
      <h2>{details.total_order}</h2>
      <h2>{details.Name}</h2>
      <img src={details.image_icon} alt="images" />
    </div>
  );
};

export default CardItemd;
