import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import FoodItemCard from '../FoodItems/foodItemCard';

const FoodCart = () => {
  const [foodCart, setFoodCart] = useState(window.foodCart);
  const [schedule, setSchedule] = useState(window.schedule);
  const [menu, setMenu] = useState(window.menu);
  const [foodItems, setFoodItems] = useState(window.foodItems);
  const [textContent, setTextContent] = useState('I am a food cart! Click me!');
  console.log(foodItems);
  return (
    <div className="FoodCart">
      <p>Open: {schedule.start_time}</p>
      <p>Close: {schedule.end_time}</p>
      <div>
        {foodItems.map((item, index) => (
          <FoodItemCard key={index} id={item.id} name={item.food_name} description={item.food_description} type={item.food_type} price={item.food_price} availability={item.food_availability} />
        ))}
      </div>
      <a href={`/schedules/${foodCart.id}`}>Show Schedule</a>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<FoodCart />, document.body.appendChild(document.createElement('div')));
});

