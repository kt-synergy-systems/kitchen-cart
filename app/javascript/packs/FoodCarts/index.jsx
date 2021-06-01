import React, { useEffect, useState, useRef } from 'react';
import FoodCartCard from './foodCartCard';
import mapboxgl from '!mapbox-gl';
import Marker from './marker';

const FoodCarts = ({ foodCarts, markers }) => {
  // foodCarts = @food_carts variable from rails controller
  const mapContainer = useRef();
  const [worldMap, setWorldMap] = useState(null);
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);
  const geoLocate = () => {
    if (!navigator.geolocation) {
      alert(
        'Please enable Gelocation in your browser to use this application.'
      );
    } else {
      navigator.geolocation.getCurrentPosition((position, error) => {
        if (error) {
          alert(error);
        } else {
          setUserLatitude(position.coords.latitude);
          setUserLongitude(position.coords.longitude);
        }
      });
    }
  };
  useEffect(() => {
    if (userLatitude && userLongitude && worldMap) {
      worldMap.flyTo({
        center: [userLongitude, userLatitude],
        zoom: 15,
        essential: true,
      });
    }
  }, [userLatitude && userLongitude]);

  useEffect(() => {
    if (!worldMap) {
      mapboxgl.accessToken = process.env.MAPBOX_API_KEY;
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [139.7528, 35.6852],
        zoom: 10,
      });
      setWorldMap(map);
    }
  }, []);

  return (
    <div className='FoodCarts'>
      <div
        className='map-container'
        ref={mapContainer}
        id='map'
        style={{ position: 'relative', height: '300px', width: '100vw' }}></div>
      {markers.map(
        (marker, index) =>
          worldMap && (
            <Marker key={index} worldMap={worldMap} foodCart={marker} />
          )
      )}
      <button onClick={geoLocate}>Find Food Carts Near Me</button>{' '}
      <div className='FoodCartCard'>
        {/* list all food carts */}
        {foodCarts.map((cart, index) => {
          console.log(cart);
          return (
            <FoodCartCard
              key={index}
              id={cart.id}
              category={cart.category}
              name={cart.name}
              description={cart.cart_description}
              open={cart.open}
              url={`/food_carts/${cart.id}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodCarts;
