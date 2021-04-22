import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

const FoodCarts = () => {
  const [foodCarts, setFoodCarts] = useState(window.foodCarts);
  return <div className="FoodCarts">{foodCarts.map((cart) => JSON.stringify(cart))}</div>;
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<FoodCarts />, document.body.appendChild(document.createElement('div')));
});
