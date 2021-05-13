import React from 'react';


const FoodCartCard = ({name, url, category, description}) => {
  return (
  <div className="food_cart-card">
    <div className="food_cart-content">
      <div className="d-flex">
        <div className="food-cart-name">
          <p>{category.toUpperCase()}</p>
          <h6>{name}</h6>
        </div>
        <p className="icon"><i className="far fa-heart"></i></p>
      </div>
      <p className="card-description">{description}</p>
      <p className="body-text-bold">Price range</p>
    </div>
  </div>

  )
}

export default FoodCartCard;
