import React from 'react';

const NewFoodItem = ({
  user, foodItem, edit
}) => {
    console.log(foodItem);
  return (<div>
    <form className="simple_form new_food_item" id="new_food_item" noValidate="novalidate" encType="multipart/form-data" action={edit ? `/food_items/update/${foodItem.id}` : `/food_carts/${foodItem.menu.food_cart_id}/menus/${foodItem.menu_id}/food_items` } acceptCharset="UTF-8" method={edit ? "patch" : "post" }>
    <input type="hidden" name="authenticity_token" value={document.getElementsByName(`csrf-token`)[0].content}></input>
    <h1>{edit ? 'Edit Food Item' : 'New Food Item'}</h1>
    <label htmlFor="food_item_name">Food Item Name</label>
    <input className="form-control string required" type="text" name="food_item[food_name]" id="food_item_name" defaultValue={foodItem.food_name} />
    <label htmlFor="food_item_decription">Description</label>
    <textarea className="form-control text required" name="food_item[food_description]" id="food_item_description" defaultValue={foodItem.food_description} />
    <label htmlFor="food_item_price">Food Price</label>
    <input className="form-control string required" type="text" name="food_item[food_price]" defaultValue={foodItem.food_price} id="food_item_price" />
    <label htmlFor="food_item_type">Food Type</label>
    <select className="form-control string required" name="food_item[food_type]" defaultValue={foodItem.food_type} id="food_item_type"><option value="food">Food</option><option value="drink">Drink</option></select>
    <input className="form-control-file file optional" type="file" name="food_item[photo]" id="food_item_photo" defaultValue={foodItem.photo} />
    <input type="submit" name="commit" value="Save Food Item" label="Save Food Item" className="btn btn btn-primary" data-disable-with="Save Food Item" />
  </form>
    <button onClick={function() {
      const confirmDelete = confirm('Are you sure?')
      if (confirmDelete) {
      fetch(`/food_items/${foodItem.id}`, { method: 'delete',  headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content,
      }}).then((response) => response.json()).then((data) => {if (data.ok) {window.location = `/food_cart/${foodItem.food_cart.id}`}})
      }
    }}>Delete</button>
  </div>)}

export default NewFoodItem;
