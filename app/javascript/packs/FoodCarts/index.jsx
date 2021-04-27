import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import FoodCartCard from './foodCartCard';

const FoodCarts = () => {
  // foodCarts = @food_carts variable from rails controller
  const [foodCarts, setFoodCarts] = useState(window.foodCarts);
  return (
    <div className="FoodCarts">
      <div className="FoodCartCard">
        {' '}
        {/* list all food carts */}
        {foodCarts.map((cart, index) => (
          <FoodCartCard key={index} id={cart.id} category={cart.category} name={cart.name} description={cart.cart_description} url={`/food_carts/${cart.id}`}/>

        ))}
      </div>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<FoodCarts />, document.body.appendChild(document.createElement('div')));
});
