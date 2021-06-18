import React from 'react';
import Home from './Pages/Home';
import FoodCarts from './FoodCarts/index';
import FoodCart from './FoodCarts/Show';
import Menus from './Menus/index';
import Schedules from './Schedules/index';

const MainTemplate = ({ data, contentType }) => {
  const getCurrentPage = () => {
    switch (contentType) {
      case 'FOOD_CARTS':
        return (
          <FoodCarts
            foodCarts={data.food_carts}
            markers={data.markers}
            schedules={data.schedules}
            user={data.user}
          />
        );
      case 'HOME':
        return <Home />;
      case 'MENUS':
        return <Menus menus={data} user={data.user} />;
      case 'FOOD_CART':
        return <FoodCart foodCart={data} user={data.user} />;
      case 'SCHEDULES':
        return (
          <Schedules
            schedules={data.schedules}
            foodCart={data.foodCart}
            user={data.user}
          />
        );
      default:
        return '';
    }
  };
  return <div>{getCurrentPage()}</div>;
};

export default MainTemplate;
