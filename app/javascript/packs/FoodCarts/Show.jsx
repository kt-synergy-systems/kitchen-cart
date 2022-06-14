import React, { useState, useEffect } from 'react';
import { getCurrentSchedule } from './foodCartIsOpen';
import { getDirections } from './getDirections';
import getFoodItemCard from '../Helper/getFoodItemCard';
import { useTranslation } from 'react-i18next';
import default_image from '../../../assets/images/default-image.png';

const FoodCart = ({ foodCart, user, photoKey, photos, isLiked }) => {
  const [userSelection, setUserSelection] = useState(null);
  const [heartFilledIn, setHeartFilledIn] = useState(isLiked ? true : false);
  const schedules = foodCart.schedules;
  const menu = foodCart.menu;
  const foodItems = foodCart.food_items;
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
    await fetch(`/food_carts/${foodCart.id}/unlike`, requestObject);
    setHeartFilledIn(false);
  };
  const bannerStyle = {
    maxHeight: '500px',
    marginLeft: 'calc(50% - 250px)',
    marginTop: '24px',
    borderRadius: '8px'
  }

  return (
    <div className='FoodCart'>
      {photoKey ? (
        <img
          alt='We love you'
          src={`http://res.cloudinary.com/kitchen-cart/image/upload/c_thumb/${photoKey}`}
          style={bannerStyle}
        />
      ) : (
        <img
          alt='We love you'
          style={bannerStyle}
          src={ default_image }></img>
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
      {foodCart?.user_id === user?.id && (
        <>
          <div className='hr'>
            <hr />
          </div>

          <div className='admin-selection'>
            <h5>Admin</h5>
            <div className='admin-buttons'>
              <a
                href={`/food_carts/${foodCart.id}/schedules/new`}
                className='owned-button'
                onClick={() => setUserSelection(null)}>
                {t('buttons.create_schedule')}
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href={`/food_carts/${foodCart.id}/schedules`}
                className='owned-button'
                type='button'
                onClick={() => setUserSelection('food')}>
                {t('buttons.show_schedule')}
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href={`/food_carts/${foodCart.id}/menus/${menu?.id}/food_items/new`}
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
        </>
      )}
      <div className='menu-selection'>
        <h5>Menu</h5>
        <div className='menu-buttons'>
          <button className='all-button' onClick={() => setUserSelection(null)}>
            {t('buttons.all')}
          </button>
          &nbsp;&nbsp;&nbsp;
          <button className='food-button' onClick={() => setUserSelection('food')}>
            {t('buttons.food')}
          </button>
          &nbsp;&nbsp;&nbsp;
          <button className='drinks-button' onClick={() => setUserSelection('drink')}>
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
