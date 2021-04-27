import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import FoodItemCard from './foodItemCard';

const Menus = () => {
  // Menus = @food_carts variable from rails controller
  const [menus, setMenus] = useState(window.menus);
  console.log(window.menus)
  return (
    <div className="Menus">
      <div className="foodItemCard">
        <FoodItemCard />
      </div>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Menus />, document.body.appendChild(document.createElement('div')));
});
