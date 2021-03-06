import React from 'react';
import { getDirections } from './getDirections';
import { useTranslation } from 'react-i18next';

const MapFoodCartCard = ({ opened, setMapCardOpened, currentMapCardCart, currentMapCardSchedule }) => {
  return (
    <div
      className='MapFoodCartCard'
      style={
        opened
          ? {
              opactiy: '1',
              pointerEvents: 'initial',
            }
          : {
              opacity: '0',
              pointerEvents: 'none',
            }
      }>
      {' '}
      <div className='modal-box'>
        <div className='closer-container'>
          <div className='closer cursor-pointer' onClick={() => setMapCardOpened(false)}>
            X
          </div>
        </div>
        {currentMapCardCart && (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '16px',
              }}>
              <div>{currentMapCardCart.category.toUpperCase()}</div>
              <i
                className='fas fa-map-marker-alt cursor-pointer'
                onClick={() => getDirections(currentMapCardSchedule)}></i>
            </div>
            <h2 className='food-cart-name'>{currentMapCardCart.name}</h2>
            <div>Closes: {currentMapCardSchedule?.end_time?.substring(11)?.substring(0, 5)}</div>
            <a href={`/food_carts/${currentMapCardCart.id}`}>See cart details.</a>
          </>
        )}
      </div>
    </div>
  );
};

export default MapFoodCartCard;
