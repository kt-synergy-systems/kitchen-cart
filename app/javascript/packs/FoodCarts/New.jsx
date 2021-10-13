import React from "react";
import { useTranslation } from "react-i18next";

const NewFoodCart = ({ user, foodCart, edit }) => {
  console.log(`Edit: ${edit}`);
  return (
    <div className="container">
      <div className="grid">
        <div className="user-form">
          <form
            className="simple_form new_food_cart"
            id="new_food_cart"
            action={edit ? `/food_carts/${foodCart.id}` : "/food_carts"}
            acceptCharset="UTF-8"
            encType="multipart/form-data"
            method="POST"
          >
            {edit && <input type="hidden" name="_method" value="patch" />}
            <input
              type="hidden"
              name="authenticity_token"
              value={document.getElementsByName(`csrf-token`)[0].content}
            ></input>
            <h2 className="title-user">{edit ? "Edit Food Cart" : "New Food Cart"}</h2>
            <div className="form-inputs">
              <label htmlFor="food_cart_name">Food Cart Name</label>
              <input
                className="form-control string required"
                type="text"
                name="food_cart[name]"
                id="food_cart_name"
                defaultValue={foodCart.name}
              />
              <label htmlFor="food_cart_phone_number">Phone Number</label>
              <input
                className="form-control string tel required"
                type="tel"
                name="food_cart[phone_number]"
                id="food_cart_phone_number"
                defaultValue={foodCart.phone_number}
              />
              <label htmlFor="food_cart_category">Food Category</label>
              <input
                className="form-control string required"
                type="text"
                name="food_cart[category]"
                defaultValue={foodCart.category}
                id="food_cart_category"
              />
              <div className="form-group text required food_cart_cart_description">
                <label className="text required" htmlFor="food_cart_cart_description">
                  Food Cart Description
                </label>
                <textarea
                  className="form-control text required"
                  name="food_cart[cart_description]"
                  defaultValue={foodCart.cart_description}
                  id="food_cart_cart_description"
                ></textarea>
              </div>
            </div>
            <input
              className="form-control-file file optional"
              type="file"
              name="food_cart[photo]"
              id="food_cart_photo"
              defaultValue={foodCart.photo}
            />
              <button type="submit">Save</button>
          </form>
          <button
            onClick={function () {
              const confirmDelete = confirm("Are you sure?");
              if (confirmDelete) {
                fetch(`/food_carts/${foodCart.id}`, {
                  method: "delete",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-CSRF-Token":
                    document.getElementsByName("csrf-token")[0].content,
                  },
                })
                .then((response) => response.json())
                .then((data) => {
                  if (data.ok) {
                    window.location = "/food_carts";
                  }
                });
              }
            }}
            >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewFoodCart;
