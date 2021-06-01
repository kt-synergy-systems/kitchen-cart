import React from "react";
import { useState, useEffect } from "react";
import getFoodItemCard from "../Helper/getFoodItemCard";

const FoodCart = ({ foodCart }) => {
  const [userSelection, setUserSelection] = useState(null);
  const schedules = foodCart.schedules;
  const menu = foodCart.menu;
  const foodItems = foodCart.food_items;
  console.log(foodItems);
  useEffect(() => {
    console.log(userSelection);
  }, [userSelection]);
  return (
    <div className="FoodCart">
      <img src="https://picsum.photos/400/300" alt="Lorem Picsum" width="100%"/>
      <div className="icons">
        <h4>
          <i className="fas fa-external-link-alt"></i> &nbsp;{" "}
          <i className="far fa-heart"></i> &nbsp;{" "}
          <a href={`/food_carts/${foodCart.id}/schedules`}><i className="far fa-calendar-alt"></i></a> &nbsp;{" "}
          <i className="fas fa-map-marker-alt"></i>
        </h4>
      </div>
      <div className="foodcart-intro">
        <h5>{foodCart.category}</h5>
        <h2>{foodCart.name}</h2>
        <p>{foodCart.description}</p>
      </div>
      <div className="menu-selection">
        <h5>Menu</h5>
        <div className="menu-buttons">
          <button onClick={() => setUserSelection(null)}>All</button>&nbsp;&nbsp;&nbsp;
          <button onClick={() => setUserSelection("food")}>Food</button>&nbsp;&nbsp;&nbsp;
          <button onClick={() => setUserSelection("drink")}>Drinks</button>
        </div>
      </div>
      <div className="food-item-card-container">
        {foodItems.map((item, index) =>
          getFoodItemCard(item, index, userSelection)
        )}
      </div>
    </div>
  );
};

export default FoodCart;
