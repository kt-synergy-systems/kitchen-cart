import React from 'react';
import Home from './Pages/Home';
import FoodCarts from './FoodCarts/index';
import FoodCart from './FoodCarts/show';
import Menus from './Menus/index';

const MainTemplate = ({ data, contentType }) => {
  console.log(data, contentType);
  const getCurrentPage = () => {
    switch (contentType) {
      case 'FOOD_CARTS':
        return <FoodCarts foodCarts={data} />;
      case 'HOME':
        return <Home />;
      case 'MENUS':
        return <Menus menus={data} />;
      case 'FOOD_CART':
        return <FoodCart foodCart={data} />;
      default:
        return '';
    }
  };
  return <div>{getCurrentPage()}</div>;
};

export default MainTemplate;