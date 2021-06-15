import React, { useState } from 'react';
const date = new Date();
const FoodCartCard = ({
  name,
  url,
  category,
  description,
  open,
  schedules,
  id,
  likedByUser,
}) => {
  const today = `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getDate() + 1 < 10 ? `0${date.getDate() + 1}` : date.getDate() + 1}`;
  const scheduleForToday = schedules.filter((sched) => sched.date === today);

  const getDirections = () => {
    console.log('fetchin directions');
    if (scheduleForToday.length) {
      // if there is more than one location for the day it needs to account for time.
      // add additional validation. check if open or will open today.
      if (!navigator.geolocation) {
        alert(
          'Please enable Gelocation in your browser to use this application.'
        );
      } else {
        navigator.geolocation.getCurrentPosition((position, error) => {
          if (error) {
            alert(error);
          } else {
            window.open(
              `https://www.google.com/maps/dir/?api=1&origin=${position.coords.latitude}, ${position.coords.longitude}&destination=${scheduleForToday[0].latitude}, ${scheduleForToday[0].longitude}&travelmode=walking`,
              '_blank'
            );
          }
        });
      }
    }
  };

  return (
    <div className='food_cart-card'>
      <div className='food_cart-image'>
        <div className='location-tag cursor-pointer' onClick={getDirections}>
          <i className='fas fa-map-marker-alt'></i>{' '}
          {scheduleForToday.length ? scheduleForToday[0].location : ''}
        </div>
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
        </div>
        <p className='card-description'>{description}</p>
        <h6 className='body-text-bold'>Price range</h6>
      </div>
    </div>
  );
};

export default FoodCartCard;
