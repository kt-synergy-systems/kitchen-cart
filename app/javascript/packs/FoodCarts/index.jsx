import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import FoodCart from './FoodCart';

const FoodCarts = () => {
  return (
    <div className="FoodCarts">
      <FoodCart />
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<FoodCarts />, document.body.appendChild(document.createElement('div')));
});
