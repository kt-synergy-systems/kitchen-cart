import React from 'react';

const FoodCartCard = ({ name, url, category, description }) => {
  return (
  <div className="food_cart-card">
    <div className="food_cart-image">
      <div className="location-tag"><i className="fas fa-map-marker-alt"></i>{" "}Location name</div>
      <img src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80" alt="alttext" className="food_cart-image" />
    </div>
    <div className="food_cart-content">
      <div className="d-flex">
        <div className="food-cart-name">
          <p>{category.toUpperCase()}</p>
          <h6>{name}</h6>
        </div>
        <img
          src='https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80'
          alt='alttext'
          className='food_cart-image'
        />
      </div>
      <div className='food_cart-content'>
        <div className='d-flex'>
          <div className='food-cart-name'>
            <p>{category.toUpperCase()}</p>
            <h6>{name}</h6>
          </div>
          <p className='icon'>
            <i className='far fa-heart'></i>
          </p>
        </div>
        <p className='card-description'>{description}</p>
        <p className='body-text-bold'>Price range</p>
      </div>
      <p className="card-description">{description}</p>
      <p className="body-text-bold">end_time</p>
    </div>
  );
};

export default FoodCartCard;
