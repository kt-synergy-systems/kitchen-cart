import React, { useEffect } from 'react';
import mapboxgl from '!mapbox-gl';
import markerIcon from '../../../assets/images/food-cart.png';

const Marker = ({ worldMap, foodCart }) => {
  useEffect(() => {
    if (foodCart.lat && foodCart.lng) {
      const div = document.createElement('div');
      div.className = 'marker';
      div.style.backgroundImage = `url('${markerIcon}')`;
      console.log(worldMap, '👍');
      new mapboxgl.Marker(div)
        .setLngLat([foodCart.lng, foodCart.lat])
        .addTo(worldMap);
      return () => {
        div.remove();
      };
    }
  }, [foodCart]);
  return null;
};

export default Marker;
