import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

const FoodCarts = () => {
  // foodCarts = @food_carts variable from rails controller
  const [foodCarts, setFoodCarts] = useState(window.foodCarts);
  return (
    <div className="FoodCarts">
      <div className="FoodCartCard">
        {' '}
        {/* list all food carts */}
        {foodCarts.map((cart, index) => (
          <div key={index}>
            <p>id: {cart.id}</p>
            <p>name: {cart.name}</p>
            <p>
              <a href={`/food_carts/${cart.id}`}>More info 🍙</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<FoodCarts />, document.body.appendChild(document.createElement('div')));
});
