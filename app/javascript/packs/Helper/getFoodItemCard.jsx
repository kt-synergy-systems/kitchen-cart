import React from 'react';
import FoodItemCard from '../FoodItems/foodItemCard';

function getFoodItemCard(item, index, userSelection, foodCart, photo) {
  console.log(photo, '🤓')
  switch (userSelection) {
    case 'food':
      if (item.food_type === 'food') {
        return (
          <FoodItemCard
            key={index}
            id={item.id}
            name={item.food_name}
            description={item.food_description}
            type={item.food_type}
            price={item.food_price}
            availability={item.food_availability}
            menu_id={item.menu_id}
            food_cart={foodCart}
            imgSrc={photo.key ? photo.key : '/#'}
          />
        );
      } else {
        return '';
      }
    case 'drink':
      if (item.food_type === 'drink') {
        return (
          <FoodItemCard
            key={index}
            id={item.id}
            name={item.food_name}
            description={item.food_description}
            type={item.food_type}
            price={item.food_price}
            availability={item.food_availability}
            menu_id={item.menu_id}
            food_cart={foodCart}
            imgSrc={photo.key ? photo.key : '/#'}
          />
        );
      } else {
        return '';
      }
    default:
      return (
        <FoodItemCard
          key={index}
          id={item.id}
          name={item.food_name}
          description={item.food_description}
          type={item.food_type}
          price={item.food_price}
          availability={item.food_availability}
          menu_id={item.menu_id}
          food_cart={foodCart}
          imgSrc={photo.key ? `http://res.cloudinary.com/kitchen-cart/image/upload/c_thumb/${photo.key}` : '/#'}
        />
      );
  }
}

export default getFoodItemCard;
