import React from "react";

const FoodItemCard = ({ name, type, description, price, availability }) => {
  return (
    <div className="food-item-card">
      <img className="food-item-image" src="https://picsum.photos/400/300" alt="Lorem Picsum" />
      <div className="food-item-text">
        <h5>{name}</h5>
        <p>{description}</p>
        <h6>{price}00 yen (excluding tax)</h6>
      </div>
    </div>
  );
};

export default FoodItemCard;
