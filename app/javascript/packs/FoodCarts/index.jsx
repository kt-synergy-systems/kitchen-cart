import React from 'react';
import FoodCartCard from './foodCartCard';

const FoodCarts = ({ foodCarts }) => {
  // foodCarts = @food_carts variable from rails controller
  return (
    <div className='FoodCarts'>
      <div className='FoodCartCard'>
        {' '}
        {/* list all food carts */}
        {foodCarts.map((cart, index) => (
          <FoodCartCard
            key={index}
            id={cart.id}
            category={cart.category}
            name={cart.name}
            description={cart.cart_description}
            url={`/food_carts/${cart.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodCarts;
