import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

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
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>
            {item.food_name} | JPY {item.food_price} 00
          </li>
        ))}
      </ul>
      <a href={`/schedules/${foodCart.id}`}>Show Schedule</a>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<FoodCart />, document.body.appendChild(document.createElement('div')));
});
