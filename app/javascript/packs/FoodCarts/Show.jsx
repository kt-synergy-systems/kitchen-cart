import React, { useState, useEffect } from 'react';
import { getCurrentSchedule } from './foodCartIsOpen';
import { getDirections } from './getDirections';
import getFoodItemCard from '../Helper/getFoodItemCard';

const FoodCart = ({ foodCart, user, isLiked }) => {
  const [userSelection, setUserSelection] = useState(null);
  const [filledIn, setFilledIn] = useState(isLiked ? true : false);
  const schedules = foodCart.schedules;
  const menu = foodCart.menu;
  const foodItems = foodCart.food_items;

  const currentSchedule = getCurrentSchedule(schedules);
  const handleUpVote = async () => {
    const res = await fetch(`/food_carts/${foodCart.id}/like`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content,
      },
      credentials: 'same-origin',
    });
    const data = await res.json();
    if (res.ok) {
      setFilledIn(true);
    }
  };

  return (
    <div className='FoodCart'>
      <img
        src='https://picsum.photos/400/300'
        alt='Lorem Picsum'
        width='100%'
      />
      <div className='icons'>
        <h4>
          <i className='fas fa-external-link-alt'></i> &nbsp;{' '}
          {filledIn ? (
            <>
              <i className='fas fa-heart'></i>&nbsp;{' '}
            </>
          ) : (
            <>
              <i className='far fa-heart' onClick={handleUpVote}></i> &nbsp;{' '}
            </>
          )}
          <a href={`/food_carts/${foodCart.id}/schedules`}>
            <i className='far fa-calendar-alt'></i>
          </a>{' '}
          &nbsp;{' '}
          {currentSchedule && (
            <i
              className='fas fa-map-marker-alt cursor-pointer'
              onClick={() => {
                if (currentSchedule) {
                  getDirections(currentSchedule);
                }
              }}></i>
          )}
        </h4>
      </div>
      <div className='foodcart-intro'>
        <h5 className='uppercase'>{foodCart.category}</h5>
        <h2>{foodCart.name}</h2>
        <p>{foodCart.description}</p>
      </div>
      <div className='hr'>
        <hr />
      </div>
      <div className='menu-selection'>
        <h5>Menu</h5>
        <div className='menu-buttons'>
          <button className='all-button' onClick={() => setUserSelection(null)}>
            All
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            className='food-button'
            onClick={() => setUserSelection('food')}>
            Food
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            className='drinks-button'
            onClick={() => setUserSelection('drink')}>
            Drinks
          </button>
        </div>
      </div>
      <div className='food-item-card-container'>
        {foodItems.map((item, index) =>
          getFoodItemCard(item, index, userSelection, foodCart)
        )}
      </div>
    </div>
  );
};

export default FoodCart;
