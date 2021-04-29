import React from 'react';

const FoodItemCard = ({name, type, description, price, availability}) => {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h6>{name}</h6>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
    )
}

export default FoodItemCard;
