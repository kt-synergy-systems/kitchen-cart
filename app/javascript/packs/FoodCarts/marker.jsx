import React, { useEffect } from 'react';
import mapboxgl from '!mapbox-gl';
import markerIcon from '../../../assets/images/food-cart.png';

const Marker = ({ worldMap, foodCart }) => {
  console.log(foodCart, '🎅');
  useEffect(() => {
    const onClick = () => {
      window.location = `/food_carts/${foodCart.id}`;
    };
    if (foodCart.lat && foodCart.lng) {
      const div = document.createElement('div');
      div.className = 'marker';
      div.style.backgroundImage = `url('${markerIcon}')`;
      div.addEventListener('click', onClick);
      new mapboxgl.Marker(div)
        .setLngLat([foodCart.lng, foodCart.lat])
        .addTo(worldMap);
      return () => {
        div.remove();
        div.removeEventListener('click', onClick);
      };
    }
  }, [foodCart]);
  return null;
};

export default Marker;
