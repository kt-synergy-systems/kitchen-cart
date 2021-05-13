import React from 'react';

const FoodItemCard = ({name, type, description, price, availability}) => {
  return (
    <div>
      <div className="food-item-card">
        <img className="food-item-image" src="" alt="" />
        <div className="food-item-text">
          <h6>{name}</h6>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
    )
}

export default FoodItemCard;
