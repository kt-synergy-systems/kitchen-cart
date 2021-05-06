import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import FoodItemCard from '../FoodItems/foodItemCard';

const root = document.getElementById('root');

const FoodCart = ({ foodCart }) => {
  console.log(foodCart, 'YOOOO');
  const schedule = foodCart.schedule;
  const menu = foodCart.menu;
  const foodItems = foodCart.food_items;
  console.log(foodItems);
  function handleFoodTypeClick(type) {
    // if food is = food only show food, if it's drink only show drink
    console.log(type);
  }

  return (
    <div className="FoodCart">
      <p>Open: {schedule.start_time}</p>
      <p>Close: {schedule.end_time}</p>
      <div>
        <button onClick={() => handleFoodTypeClick('food')}>Food</button>
        <button onClick={() => handleFoodTypeClick('drink')}>Drinks</button>
      </div>

      <div>
        {foodItems.map((item, index) =>
          item.food_availability ? (
            <FoodItemCard
              key={index}
              id={item.id}
              name={item.food_name}
              description={item.food_description}
              type={item.food_type}
              price={item.food_price}
              availability={item.food_availability}
            />
          ) : (
            ''
          )
        )}
      </div>
      <a href={`/schedules/${foodCart.id}`}>Show Schedule</a>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <FoodCart foodCart={JSON.parse(root.dataset.foodCart)} />,
    root
  );
});
