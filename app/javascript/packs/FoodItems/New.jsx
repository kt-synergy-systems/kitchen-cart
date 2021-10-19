import React from 'react';
import { useTranslation } from 'react-i18next';

const NewFoodItem = ({ user, foodItem, edit }) => {
  const t = useTranslation().t;
  return (
    <div className='container'>
      <div className='grid'>
        <div className='user-form'>
          <form
            className='simple_form new_food_item'
            id='new_food_item'
            noValidate='novalidate'
            encType='multipart/form-data'
            action={
              edit
                ? `/food_carts/${foodItem.menu.food_cart_id}/menus/${foodItem.menu_id}/food_items/${foodItem.id}`
                : `/food_carts/${foodItem.menu.food_cart_id}/menus/${foodItem.menu_id}/food_items`
            }
            acceptCharset='UTF-8'
            method='POST'>
            {edit && <input type='hidden' name='_method' value='patch' />}
            <input
              type='hidden'
              name='authenticity_token'
              value={
                document.getElementsByName(`csrf-token`)[0].content
              }></input>
            <h1>
              {edit
                ? t('forms.food_item_form.edit')
                : t('forms.food_item_form.new')}
            </h1>
            <label htmlFor='food_item_name'>
              {t('forms.food_item_form.name')}
            </label>
            <input
              className='form-control string required'
              type='text'
              name='food_item[food_name]'
              id='food_item_name'
              defaultValue={foodItem.food_name}
            />
            <label htmlFor='food_item_decription'>
              {t('forms.food_item_form.description')}
            </label>
            <textarea
              className='form-control text required'
              name='food_item[food_description]'
              id='food_item_description'
              defaultValue={foodItem.food_description}
            />
            <label htmlFor='food_item_price'>
              {t('forms.food_item_form.price')}
            </label>
            <input
              className='form-control string required'
              type='text'
              name='food_item[food_price]'
              defaultValue={foodItem.food_price}
              id='food_item_price'
            />
            <label htmlFor='food_item_type'>
              {t('forms.food_item_form.price')}
            </label>
            <select
              className='form-control string required'
              name='food_item[food_type]'
              defaultValue={foodItem.food_type}
              id='food_item_type'>
              <option value='food'>{t('buttons.food')}</option>
              <option value='drink'>{t('buttons.drinks')}</option>
            </select>
            <input
              className='form-control-file file optional'
              type='file'
              name='food_item[photo]'
              id='food_item_photo'
              defaultValue={foodItem.photo}
            />
            <input
              type='submit'
              name='commit'
              value={t('buttons.save_food_item')}
              label={t('buttons.save_food_item')}
              className='btn btn btn-primary'
              data-disable-with='Save Food Item'
            />
          </form>
          <button
            onClick={function () {
              const confirmDelete = confirm('Are you sure?');
              if (confirmDelete) {
                fetch(
                  `/food_carts/${foodItem.menu.food_cart_id}/menus/${foodItem.menu_id}/food_items/${foodItem.id}`,
                  {
                    method: 'delete',
                    headers: {
                      'Content-Type': 'application/json',
                      Accept: 'application/json',
                      'X-CSRF-Token':
                        document.getElementsByName('csrf-token')[0].content,
                    },
                  }
                )
                  .then((response) => response.json())
                  .then((data) => {
                    if (data.ok) {
                      window.location = `/food_carts/${foodItem.menu.food_cart_id}`;
                    }
                  });
              }
            }}>
            {t('buttons.delete')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewFoodItem;
