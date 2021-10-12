import React from "react";
import FoodItemCard from "../FoodItems/foodItemCard";
import { useTranslation } from "react-i18next";

const Menus = ({ menus, user }) => {
  // Menus = @food_carts variable from rails controller
  const t = useTranslation().t;
  return (
    <div className="Menus">
      <div className="foodItemCard">
        <FoodItemCard />
      </div>
    </div>
  );
};

export default Menus;
