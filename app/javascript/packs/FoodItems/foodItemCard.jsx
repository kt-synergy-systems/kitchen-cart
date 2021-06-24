import React from "react";

const FoodItemCard = ({ name, type, description, price, availability, id, menu_id, food_cart }) => {
  return (
    <div className="food-item-card">
      <img className="food-item-image" src="https://picsum.photos/400/300" alt="Lorem Picsum" />
      <div className="food-item-text">
        <h5>{name}</h5>
        <p>{description}</p>
        <h6>{price}00 yen (excluding tax)</h6>
      </div>
      <a href={`/food_carts/${food_cart.id}/menus/${menu_id}/food_items/${id}/edit`}>
        <i className='fas fa-edit'></i>
      </a>
    </div>
  );
};

export default FoodItemCard;
