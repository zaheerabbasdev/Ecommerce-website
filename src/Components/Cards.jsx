import React from 'react';
import './Cards.css'; // Ensure this path is correct

const Cards = ({ image, title, price }) => {
  return (
    <div className="card-body">
      <div className="card">
        <img src={image} alt={title} className="img-fluid" />
        <p>{title}</p>
        <h4>{price}</h4>
      </div>
    </div>
  );
};

export default Cards;
