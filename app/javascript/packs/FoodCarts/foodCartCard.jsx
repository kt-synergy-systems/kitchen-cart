import React from 'react';
import { getCurrentSchedule } from './foodCartIsOpen';
import { getDirections } from './getDirections';

const FoodCartCard = ({
  name,
  url,
  category,
  description,
  schedules,
  id,
  likedByUser,
  isEdit,
}) => {
  const currentSchedule = getCurrentSchedule(schedules);

  return (
    <div className='food_cart-card'>
      <div className='food_cart-image'>
        {currentSchedule ? (
          <div
            className='location-tag cursor-pointer'
            onClick={() => getDirections(currentSchedule)}>
            <i className='fas fa-map-marker-alt'></i> {currentSchedule.location}
          </div>
        ) : (
          <div
            className='location-tag cursor-pointer'
            onClick={() => {
              window.open(`http://localhost:3000/food_carts/${id}/schedules`);
            }}>
            Sorry, we're closed.
          </div>
        )}
        <img
          src='https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80'
          alt='Food Cart'
        />
      </div>

      <div className='food_cart-content'>
        <div className='d-flex'>
          <div className='food-cart-name'>
            <p>{category.toUpperCase()}</p>
            <h5>
              <a href={url}>{name}</a>
            </h5>
          </div>
        </div>
        <div className='heart-icon'>
          {likedByUser ? (
            <i className='far fa-heart'></i>
          ) : (
            <i className='fas fa-heart'></i>
          )}

          {isEdit && (
            <a href={`/food_carts/${id}/edit`}>
              <i className='fas fa-edit'></i>
            </a>
          )}
        </div>
        <p className='card-description'>{description}</p>
        <h6 className='body-text-bold'>Price range</h6>
      </div>
    </div>
  );
};

export default FoodCartCard;
