import React from 'react';
import { useState, useEffect } from 'react';
import getFoodItemCard from '../Helper/getFoodItemCard';

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

export default FoodCart;
