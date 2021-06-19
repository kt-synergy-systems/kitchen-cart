import React, { useEffect } from 'react';
import mapboxgl from '!mapbox-gl';
import markerIcon from '../../../assets/images/food-cart.png';

const Marker = ({
  worldMap,
  sched,
  myFoodCart,
  setMapCardOpened,
  setCurrentMapCardCart,
  setCurrentMapCardSchedule,
}) => {
  useEffect(() => {
    if (sched.latitude && sched.longitude) {
      const div = document.createElement('div');
      const label = document.createElement('div');
      div.className = 'marker';
      label.className = 'marker-label';
      label.innerText = myFoodCart.name;
      document.body.appendChild(label);
      const onClick = () => {
        setMapCardOpened(true);
        setCurrentMapCardCart(myFoodCart);
        setCurrentMapCardSchedule(sched);
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
        .setLngLat([sched.longitude, sched.latitude])
        .addTo(worldMap);
      return () => {
        div.remove();
        label.remove();
        div.removeEventListener('click', onClick);
        div.removeEventListener('mouseenter', handleMouseEnter);
        div.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [sched]);
  return null;
};

export default Marker;
