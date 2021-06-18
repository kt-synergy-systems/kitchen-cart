import React, { useEffect } from 'react';
import mapboxgl from '!mapbox-gl';
import markerIcon from '../../../assets/images/food-cart.png';

const Marker = ({
  worldMap,
  foodCart,
  foodCarts,
  setMapCardOpened,
  setCurrentMapCardCart,
  mySched,
  setCurrentMapCardSchedule,
}) => {
  const myFoodCart = foodCarts.filter((c) => c.id === foodCart.id)[0];
  useEffect(() => {
    if (foodCart.lat && foodCart.lng) {
      const div = document.createElement('div');
      const label = document.createElement('div');
      div.className = 'marker';
      label.className = 'marker-label';
      label.innerText = myFoodCart.name;
      document.body.appendChild(label);
      const onClick = () => {
        setMapCardOpened(true);
        setCurrentMapCardCart(myFoodCart);
        setCurrentMapCardSchedule(mySched);
        label.style.opacity = '0';
      };
      const handleMouseEnter = () => {
        label.style.opacity = '0.8';
        label.style.top = `${div.getBoundingClientRect().y}px`;
        label.style.left = `${div.getBoundingClientRect().x}px`;
        label.style.width = 'initial';
      };
      const handleMouseLeave = () => {
        label.style.opacity = '0';
        label.style.width = '0px';
      };
      div.style.backgroundImage = `url('${markerIcon}')`;
      div.addEventListener('click', onClick);
      div.addEventListener('mouseenter', handleMouseEnter);
      div.addEventListener('mouseleave', handleMouseLeave);
      new mapboxgl.Marker(div)
        .setLngLat([foodCart.lng, foodCart.lat])
        .addTo(worldMap);
      return () => {
        div.remove();
        label.remove();
        div.removeEventListener('click', onClick);
        div.removeEventListener('mouseenter', handleMouseEnter);
        div.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [foodCart]);
  return null;
};

export default Marker;
