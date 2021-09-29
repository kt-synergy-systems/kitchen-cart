import React from 'react';
import ReactDOM from 'react-dom';
import MainTemplate from './MainTemplate';

import i18next from 'i18next';

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  translation: {
    en: {
      buttons: {
        home: 'Home',
        food_cart: 'Food Carts',
        create: 'Create New Food Cart',
        sign_up: 'Sign Up',
        sign_in: 'Sign In',
        sign_out: 'Sign Out',
        search: 'Search',
        nearby: 'Nearby Food Carts',
        my_foodcarts: 'My Food Carts',
        file: 'Upload Photo',
        save_food_cart: 'Save',
        save_food_item: 'Save Food Item',
        delete: 'Delete',
        all: 'All',
        food: 'Food',
        drinks: 'Drinks',
        create_schedule: 'Create Schedule',
        create_food_item: 'Add Food Item',
        create_menu: 'Create Menu',
      },
      title: 'Kitchen Cart',
      mission:
        'Making it easier to find food on the go, while helping local businesses to thrive.',
      copyright: '© 2001 Brandon, Dan, Hongjoo, Josh, and Marisa',

      search_bar: 'Find by name or location',
      see_cart: 'See cart details',
      closed: "Sorry, we're closed",
      menu_title: 'Menu',
      yen: 'yen (excluding tax)',
      forms: {
        food_cart_form: {
          new: 'New Food Cart',
          edit: 'Edit Food Cart',
          name: 'Food Cart Name',
          number: 'Phone Number',
          category: 'Category',
          description: 'Food Cart Description',
        },
        food_item_form: {
          new: 'New Food Item',
          edit: 'Edit Food Item',
          name: 'Food Item Name',
          description: 'Description',
          price: 'Food Price',
          type: 'Food Type',
        },

        schedule_form: {
          new: 'New Schedule',
          instruction:
            'Drop a pin on the map to mark where your food cart will be.',
          search_text: 'Search by area name',
          location: 'Location',
          open: 'Opening Time',
          close: 'Closing Time',
        },
      },
      schedule_view: {
        weekly: 'weekly schedule',
        add: '+ Add Schedule',
      },
      week: {
        mon: 'mon',
        tue: 'tue',
        wed: 'wed',
        thu: 'thu',
        fri: 'fri',
        sat: 'sat',
        sun: 'sun',
      },

      month: {
        jan: 'January',
        feb: 'February',
        mar: 'March',
        apr: 'April',
        may: 'May',
        jun: 'June',
        jul: 'July',
        aug: 'August',
        sep: 'September',
        oct: 'October',
        nov: 'November',
        dec: 'December',
      },
      alerts: {
        geolocation:
          'Please enable Gelocation in your browser to use this application.',
        food_cart_open:
          'This food cart is not currently open. Please check back again later.',
        map_location: 'Please pinpoint your location on the map.',
        start_time: 'Please select a start time.',
        end_time: 'Please select an end time.',
        early_end: 'End time must be later than start time.',
        location: 'Please add a description of the location.',
        geolocation_support: 'Geolocation is not supported in this browser.',
        authorization: 'You are not authorized to perform this action.',
      },
    },
    ja: {},
  },
});
const root = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  // Render an entry point here;
  ReactDOM.render(
    <MainTemplate
      data={JSON.parse(root.dataset.data)}
      contentType={root.dataset.contentType}
    />,
    root
  );
});
