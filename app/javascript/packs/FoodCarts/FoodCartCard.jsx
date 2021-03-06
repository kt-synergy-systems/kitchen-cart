import React, { useState } from 'react';
import { getCurrentSchedule } from './foodCartIsOpen';
import { getDirections } from './getDirections';
import { useTranslation } from 'react-i18next';

const FoodCartCard = ({ name, url, category, description, schedules, id, likedByUser, isEdit }) => {
  const t = useTranslation().t;
  const currentSchedule = getCurrentSchedule(schedules);
  const [heartFilledIn, setHeartFilledIn] = useState(likedByUser ? true : false);
  const requestObject = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content,
    },
    credentials: 'same-origin',
  };
  const handleUpVote = async () => {
    await fetch(`/food_carts/${id}/like`, requestObject);
    setHeartFilledIn(true);
  };

  const handleUnlike = async () => {
    await fetch(`/food_carts/${id}/unlike`, requestObject);
    setHeartFilledIn(false);
  };

  return (
    <div className='food_cart-card'>
      <div className='food_cart-image'>
        {currentSchedule ? (
          <div className='location-tag cursor-pointer' onClick={() => getDirections(currentSchedule)}>
            <i className='fas fa-map-marker-alt'></i> {currentSchedule.location}
          </div>
        ) : (
          <div
            className='location-tag cursor-pointer'
            onClick={() => {
              window.open(`http://localhost:3000/food_carts/${id}/schedules`);
            }}>
            {t('closed')}
          </div>
        )}
        <img
          src='https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80'
          alt='Food Cart'
        />
      </div>

      <div className='food_cart-content'>
        <div className='heart-icon'>
          {heartFilledIn ? (
            <i className='fas fa-heart' onClick={handleUnlike}></i>
          ) : (
            <i className='far fa-heart' onClick={handleUpVote}></i>
          )}
          &nbsp;&nbsp;{' '}
          <a href={`/food_carts/${id}/schedules`}>
            <i className='far fa-calendar-alt'></i>
          </a>
          &nbsp;&nbsp;{' '}
          {isEdit && (
            <a href={`/food_carts/${id}/edit`}>
              <i className='fas fa-edit'></i>
            </a>
          )}
        </div>
        <br></br>
        <div className='d-flex'>
          <div className='food-cart-name'>
            <p>{category.toUpperCase()}</p>
            <h5>
              <a href={url}>{name}</a>
            </h5>
          </div>
        </div>
        <p className='card-description'>{description}</p>
      </div>
    </div>
  );
};

export default FoodCartCard;
