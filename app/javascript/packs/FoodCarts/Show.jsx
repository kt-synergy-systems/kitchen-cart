import React, { useState, useEffect } from 'react';
import { getCurrentSchedule } from './foodCartIsOpen';
import { getDirections } from './getDirections';
import getFoodItemCard from '../Helper/getFoodItemCard';
import { useTranslation } from 'react-i18next';

const FoodCart = ({ foodCart, photoKey, photos, isLiked }) => {
  const [userSelection, setUserSelection] = useState(null);
  const [heartFilledIn, setHeartFilledIn] = useState(isLiked ? true : false);
  const schedules = foodCart.schedules;
  const menu = foodCart.menu;
  const foodItems = foodCart.food_items;
  console.log('🎅', photos);
  const t = useTranslation().t;
  const requestObject = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content,
    },
    credentials: 'same-origin',
  };

  const currentSchedule = getCurrentSchedule(schedules);

  const handleUpVote = async () => {
    await fetch(`/food_carts/${foodCart.id}/like`, requestObject);
    setHeartFilledIn(true);
  };

  const handleUnlike = async () => {
    console.log(foodCart.id);
    await fetch(`/food_carts/${foodCart.id}/unlike`, requestObject);
    setHeartFilledIn(false);
  };

  return (
    <div className='FoodCart'>
      {photoKey ? (
        <img
          alt='go to heaven'
          src={`http://res.cloudinary.com/kitchen-cart/image/upload/c_thumb/${photoKey}`}
          width='100%'
        />
      ) : (
        <img
          alt='We love you'
          width='100%'
          src={`https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80`}></img>
      )}
      <div className='icons'>
        <h4>
          {heartFilledIn ? (
            <i className='fas fa-heart' onClick={handleUnlike}></i>
          ) : (
            <i className='far fa-heart' onClick={handleUpVote}></i>
          )}{' '}
          &nbsp;{' '}
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
      <div className='admin-selection'>
        <h5>Admin</h5>
        <div className='admin-buttons'>
          <a href={`/food_carts/${foodCart.id}/schedules/new`}
            className='owned-button' 

            onClick={() => setUserSelection(null)}>
            {t('buttons.create_schedule')}
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href={`/food_carts/${foodCart.id}/schedules`}
            className='owned-button'
            type='button'
            onClick={() => setUserSelection('food')}>
            {t('buttons.show_schedule')}
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href={`/food_carts/${foodCart.id}/menus/${menu.id}/food_items/new`}
            className='owned-button'
            type='button'
            onClick={() => setUserSelection('drink')}>
            {t('buttons.create_food_item')}
          </a>
        </div>
      </div>
      <div className='hr'>
        <hr />
      </div>
      <div className='menu-selection'>
        <h5>Menu</h5>
        <div className='menu-buttons'>
          <button className='all-button' onClick={() => setUserSelection(null)}>
            {t('buttons.all')}
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            className='food-button'
            onClick={() => setUserSelection('food')}>
            {t('buttons.food')}
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            className='drinks-button'
            onClick={() => setUserSelection('drink')}>
            {t('buttons.drinks')}
          </button>
        </div>
      </div>
      <div className='food-item-card-container'>
        {foodItems.map((item, index) =>
          getFoodItemCard(
            item,
            index,
            userSelection,
            foodCart,
            photos.find((el) => el.food_item_id === item.id)
          )
        )}
      </div>
    </div>
  );
};

export default FoodCart;
