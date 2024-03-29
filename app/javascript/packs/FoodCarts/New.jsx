import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const NewFoodCart = ({ user, foodCart, edit }) => {
  const t = useTranslation().t;
  const [phone, setPhone] = useState(null);
  const phoneNumberIsValid = () => {
    if (
      phone.match(
        /^(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})$/
      )
    ) {
      return true;
    }
  };
  const submitForm = (e) => {
    if (!phoneNumberIsValid()) {
      e.preventDefault();
      alert("Please enter a valid phone number");
    }
  };
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
            onSubmit={submitForm}
            method="POST"
          >
            {edit && <input type="hidden" name="_method" value="patch" />}
            <input
              type="hidden"
              name="authenticity_token"
              value={document.getElementsByName(`csrf-token`)[0].content}
            ></input>
            <h2 className="title-user">
              {edit
                ? t("forms.food_cart_form.edit")
                : t("forms.food_cart_form.new")}
            </h2>
            <div className="form-inputs">
              <label htmlFor="food_cart_name">
                {t("forms.food_cart_form.name")}
              </label>
              <input
                className="form-control string required"
                type="text"
                name="food_cart[name]"
                id="food_cart_name"
                defaultValue={foodCart.name}
              />
              <label htmlFor="food_cart_phone_number">
                {t("forms.food_cart_form.number")}
              </label>
              <input
                className="form-control string tel required"
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                name="food_cart[phone_number]"
                id="food_cart_phone_number"
                defaultValue={foodCart.phone_number}
              />
              <label htmlFor="food_cart_category">
                {t("forms.food_cart_form.category")}
              </label>
              <input
                className="form-control string required"
                type="text"
                name="food_cart[category]"
                defaultValue={foodCart.category}
                id="food_cart_category"
              />
              <div className="form-group text required food_cart_cart_description">
                <label
                  className="text required"
                  htmlFor="food_cart_cart_description"
                >
                  {t("forms.food_cart_form.description")}
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
              className="form-control-file file optional form-button-upload"
              type="file"
              name="food_cart[photo]"
              id="food_cart_photo"
              defaultValue={foodCart.photo}
            />
            <button className="form-button-save" type="submit">
              {t("buttons.save_food_cart")}
            </button>
          </form>
          <button
            className="form-button-delete"
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
            {t("buttons.delete")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewFoodCart;
