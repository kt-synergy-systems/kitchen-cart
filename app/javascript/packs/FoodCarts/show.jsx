import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import FoodItemCard from '../FoodItems/foodItemCard';
import getFoodItemCard from '../Helper/getFoodItemCard';

const root = document.getElementById('root');

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
  <div>
    <div>
      <div className="location-tag"><i className="fas fa-map-marker-alt"></i>{" "}Location name</div>
      <img src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80" alt="alttext" className="food_cart-image" />
    </div>
      <div className='FoodCart'>
        {schedules.map((schedule) => (
          <>
            <p>Date: {schedule.date}</p>
            <p>Open: {schedule.start_time}</p>
            <p>Close: {schedule.end_time}</p>
          </>
        ))}

        <img src='' alt='' />
        <div className='icons'></div>
        <div className='foodcart-intro'></div>
        <div>
          <button onClick={() => setUserSelection(null)}>All</button>
          <button onClick={() => setUserSelection('food')}>Food</button>
          <button onClick={() => setUserSelection('drink')}>Drinks</button>
        </div>

        <div>{foodItems.map((item, index) => getFoodItemCard(item, index, userSelection))}</div>
      </div>
    </div>
  );
};

ReactDOM.render(<FoodCart foodCart={JSON.parse(root.dataset.foodCart)} />, root);
