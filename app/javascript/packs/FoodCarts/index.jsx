import React, { useEffect, useState, useRef } from 'react';
import FoodCartCard from './FoodCartCard';
import mapboxgl from '!mapbox-gl';
import Marker from './marker';
import Search from './Search';
import MapFoodCartCard from './MapFoodCartCard';
import { getCurrentSchedule } from './foodCartIsOpen';

const FoodCarts = ({ foodCarts, schedules, user, votes }) => {
  const mapContainer = useRef();
  const [worldMap, setWorldMap] = useState(null);
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);
  const [showOnlyMyFoodCarts, setShowOnlyMyFoodCarts] = useState(false);
  const [mapCardOpened, setMapCardOpened] = useState(false);
  const [currentMapCardCart, setCurrentMapCardCart] = useState(null);
  const [currentMapCardSchedule, setCurrentMapCardSchedule] = useState(null);
  let allClosedFoodCarts = [];
  let allOpenSchedules = [];
  let allOpenFoodCarts = [];
  foodCarts.map((fc) => {
    const myScheds = schedules.filter((s) => s.food_cart_id === fc.id);
    if (getCurrentSchedule(myScheds)) {
      allOpenSchedules.push(getCurrentSchedule(myScheds));
      allOpenFoodCarts.push(fc);
    } else {
      allClosedFoodCarts.push(fc);
    }
  });
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

  const getMySchedules = (myId) => {
    const mySchedules = [];
    if (schedules) {
      schedules.forEach((sched) => {
        if (sched.food_cart_id === myId) {
          mySchedules.push(sched);
        }
      });
    }
    return mySchedules;
  };

  return (
    <div className='FoodCarts'>
      <MapFoodCartCard
        opened={mapCardOpened}
        setMapCardOpened={setMapCardOpened}
        currentMapCardCart={currentMapCardCart}
        currentMapCardSchedule={currentMapCardSchedule}
      />
      <Search opened={mapCardOpened} />
      <div className='map-container' ref={mapContainer} id='map'></div>
      {allOpenSchedules.map((sched, index) => {
        if (worldMap) {
          return (
            <Marker
              key={index}
              worldMap={worldMap}
              sched={sched}
              myFoodCart={allOpenFoodCarts[index]}
              setMapCardOpened={setMapCardOpened}
              setCurrentMapCardCart={setCurrentMapCardCart}
              setCurrentMapCardSchedule={setCurrentMapCardSchedule}
            />
          );
        }
      })}
      <div className='location-button-container'>
        <button className='location-button' onClick={geoLocate}>
          Find Food Carts Near Me
        </button>{' '}
        <button
          className='location-button'
          onClick={() => {
            showOnlyMyFoodCarts
              ? setShowOnlyMyFoodCarts(false)
              : setShowOnlyMyFoodCarts(true);
          }}>
          {!showOnlyMyFoodCarts ? 'Food Carts I Own' : 'Show All Food Carts'}
        </button>
      </div>
      <div className='FoodCartCard'>
        {/* list all food carts */}
        {foodCarts.map((cart, index) => {
          if (showOnlyMyFoodCarts && cart.user_id === user.id) {
            return (
              <FoodCartCard
                key={index}
                id={cart.id}
                category={cart.category}
                name={cart.name}
                description={cart.cart_description}
                open={cart.open}
                url={`/food_carts/${cart.id}`}
                schedules={getMySchedules(cart.id)}
                isEdit={true}
              />
            );
          }
        })}

        {!showOnlyMyFoodCarts &&
          allOpenFoodCarts.map((cart, index) => (
            <FoodCartCard
              key={index}
              id={cart.id}
              category={cart.category}
              name={cart.name}
              description={cart.cart_description}
              open={cart.open}
              url={`/food_carts/${cart.id}`}
              schedules={getMySchedules(cart.id)}
              isEdit={cart.user_id === user.id ? true : false}
            />
          ))}

        {!showOnlyMyFoodCarts &&
          allClosedFoodCarts.map((cart, index) => (
            <FoodCartCard
              key={index}
              id={cart.id}
              category={cart.category}
              name={cart.name}
              description={cart.cart_description}
              open={cart.open}
              url={`/food_carts/${cart.id}`}
              schedules={getMySchedules(cart.id)}
              isEdit={cart.user_id === user.id ? true : false}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodCarts;
