import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import FoodItemCard from '../FoodItems/foodItemCard';

const root = document.getElementById('root');

const FoodCart = ({ foodCart }) => {
  const [ userSelection, setUserSelection ] = useState(null);
  console.log(foodCart, 'YOOOO');
  const schedule = foodCart.schedule;
  const menu = foodCart.menu;
  const foodItems = foodCart.food_items;
  console.log(foodItems);
  useEffect(() => {
    console.log(userSelection);
  }, [ userSelection ]);
  function getFoodItemCard (item, index){
    switch (userSelection) {
      case 'food':
        if (item.food_type==='food') {
        return <FoodItemCard
        key={index}
        id={item.id}
        name={item.food_name}
        description={item.food_description}
        type={item.food_type}
        price={item.food_price}
        availability={item.food_availability}
      />;
    } else {
      return ''
    }
      case 'drink':
        if (item.food_type==='drink') {
        return <FoodItemCard
        key={index}
        id={item.id}
        name={item.food_name}
        description={item.food_description}
        type={item.food_type}
        price={item.food_price}
        availability={item.food_availability}
      />;
        } else {
          return ''
        }
      default:
        return <FoodItemCard
        key={index}
        id={item.id}
        name={item.food_name}
        description={item.food_description}
        type={item.food_type}
        price={item.food_price}
        availability={item.food_availability}
      />;
    }
  }

  return (
    <div className="FoodCart">
      <p>Open: {schedule.start_time}</p>
      <p>Close: {schedule.end_time}</p>
      <div>
        <button onClick={() => setUserSelection(null)}>All</button>
        <button onClick={() => setUserSelection('food')}>Food</button>
        <button onClick={() => setUserSelection('drink')}>Drinks</button>
      </div>

      <div>
        {foodItems.map((item, index) => getFoodItemCard(item, index)
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
