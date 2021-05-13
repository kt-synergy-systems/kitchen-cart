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
    <div className='FoodCart'>
      <img src='https://picsum.photos/400/300' alt='Lorem Picsum' />
      <div className='icons'>
        <h4>
          <i class="fas fa-external-link-alt"></i> &nbsp; <i class="far fa-heart"></i> &nbsp; <i class="far fa-calendar-alt"></i> &nbsp; <i class="fas fa-map-marker-alt"></i>
        </h4>
      </div>
      <div className='foodcart-intro'>
        <h5>Category</h5>
        <h2>Food Cart Name</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <hr></hr>
      </div>
      <div className='menu-selection'>
        <h5>Menu</h5>
        <button onClick={() => setUserSelection(null)}>All</button>
        <button onClick={() => setUserSelection('food')}>Food</button>
        <button onClick={() => setUserSelection('drink')}>Drinks</button>
      </div>
      <div className='food-item-card-container'>{foodItems.map((item, index) => getFoodItemCard(item, index, userSelection))}</div>
    </div>
  );
};

ReactDOM.render(<FoodCart foodCart={JSON.parse(root.dataset.foodCart)} />, root);
