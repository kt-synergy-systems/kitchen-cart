import React from 'react';
import FoodItemCard from '../FoodItems/foodItemCard';

const Menus = ({ menus }) => {
  // Menus = @food_carts variable from rails controller
  return (
    <div className='Menus'>
      <div className='foodItemCard'>
        <FoodItemCard />
      </div>
    </div>
  );
};

export default Menus;
