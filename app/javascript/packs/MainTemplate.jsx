import React from 'react';
import FoodCarts from './FoodCarts/index';

const MainTemplate = ({ data }) => {
  const getCurrentPage = () => {
    switch (data.type) {
      case 'FOOD_CARTS':
        return <FoodCarts FoodCarts={data} />;
    }
  };
  return <div>{getCurrentPage()}</div>;
};

export default MainTemplate;
