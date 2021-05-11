import React from 'react';
import FoodItemCard from '../FoodItems/foodItemCard';

function getFoodItemCard (item, index, userSelection){
    switch (userSelection) {
      case 'food':
        if (item.food_type==='food') {
        return <FoodItemCard
        key={index}
        id={item.id}
        name={item.food_name}
        description={item.food_description}
        type={item.food_type}
        price={item.food_price}
        availability={item.food_availability}
      />;
    } else {
      return ''
    }
      case 'drink':
        if (item.food_type==='drink') {
        return <FoodItemCard
        key={index}
        id={item.id}
        name={item.food_name}
        description={item.food_description}
        type={item.food_type}
        price={item.food_price}
        availability={item.food_availability}
      />;
        } else {
          return ''
        }
      default:
        return <FoodItemCard
        key={index}
        id={item.id}
        name={item.food_name}
        description={item.food_description}
        type={item.food_type}
        price={item.food_price}
        availability={item.food_availability}
      />;
    }
  }

  export default getFoodItemCard;