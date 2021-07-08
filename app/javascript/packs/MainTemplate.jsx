import React from "react";
import Home from "./Pages/Home";
import FoodCarts from "./FoodCarts/index";
import FoodCart from "./FoodCarts/Show";
import Menus from "./Menus/index";
import Schedules from "./Schedules/index";
import NewFoodCart from "./FoodCarts/New";
import NewFoodItem from "./FoodItems/New";

const MainTemplate = ({ data, contentType }) => {
  const getCurrentPage = () => {
    switch (contentType) {
      case "FOOD_CARTS":
        return (
          <FoodCarts
            foodCarts={data.food_carts}
            schedules={data.schedules}
            user={data.user}
            likes={data.likes}
          />
        );
      case "NEW_FOOD_CART":
        return <NewFoodCart foodCart={data.food_cart} user={data.user} />;
      case "EDIT_FOOD_CART":
        return (
          <NewFoodCart foodCart={data.food_cart} user={data.user} edit={true} />
        );
      case "HOME":
        return <Home />;
      case "MENUS":
        return <Menus menus={data} user={data.user} />;
      case "FOOD_CART":
        return (
          <FoodCart
            foodCart={JSON.parse(data.food_cart)}
            user={data.user}
            isLiked={data.is_liked}
            photoKey={data.photo_key}
            photos={data.photos}
          />
        );
      case "SCHEDULES":
        return (
          <Schedules
            schedules={data.schedules}
            foodCart={data.foodCart}
            user={data.user}
          />
        );
      case "NEW_FOOD_ITEM":
        return (
          <NewFoodItem foodItem={JSON.parse(data.food_item)} user={data.user} />
        );
      case "EDIT_FOOD_ITEM":
        return (
          <NewFoodItem
            foodItem={JSON.parse(data.food_item)}
            user={data.user}
            edit={true}
          />
        );
      default:
        return "";
    }
  };
  return <div>{getCurrentPage()}</div>;
};

export default MainTemplate;
