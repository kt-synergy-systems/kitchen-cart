import React from 'react';
import ReactDOM from 'react-dom';
import MainTemplate from './MainTemplate';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
let lang = window.localStorage.getItem('myLang');
export const translationData = {
  // the translations
  // (tip move them in a JSON file and import them,
  // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  lng: lang === 'ja' ? 'ja' : 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
  resources: {
    en: {
      translation: {
        hello: 'Hello world',
        buttons: {
          home: 'Home',
          food_cart: 'Food Carts',
          create: 'Add Food Cart',
          sign_up: 'Sign Up',
          sign_in: 'Sign In',
          sign_out: 'Sign Out',
          search: 'Search',
          nearby: 'Nearby Food Carts',
          my_foodcarts: 'My Food Carts',
          file: 'Upload Photo',
          save_food_cart: 'Save',
          save_food_item: 'Save',
          delete: 'Delete',
          all: 'All',
          all_carts: 'All Food Carts',
          food: 'Food',
          drinks: 'Drinks',
          create_schedule: 'Create Schedule',
          create_food_item: 'Add Food Item',
          show_menu: 'Show Menu',
          show_schedule: 'Show Schedule',
        },
        title: 'Kitchen Cart',
        mission: 'Making it easier to find food on the go, while helping local businesses to thrive.',
        copyright: '© 2001 Brandon, Dan, Hongjoo, Josh, and Marisa',
        search_bar: 'Find by name or location',
        see_cart: 'See cart details',
        closed: "Sorry, we're closed",
        menu_title: 'Menu',
        yen: 'yen',
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
            title: 'Schedule',
            new: 'New Schedule',
            instruction: 'Drop a pin on the map to mark where your food cart will be.',
            search_text: 'Search by area name',
            location: 'Location',
            open: 'Opening Time',
            close: 'Closing Time',
            nearest_station: 'Nearest Station',
          },
          schedule_view: { weekly: 'Weekly Schedule', add: '+ Add Schedule' },
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
        },
        alerts: {
          geolocation: 'In order to use this application, please enable Gelocation in your browser',
          food_cart_open: 'This food cart is currently not open. Please check back at a later date.',
          map_location: 'Locate us on the map',
          start_time: 'Please select a start time.',
          end_time: 'Please select an end time.',
          early_end: 'The end time must be later than the start time.',
          location: 'Please add a description of your location.',
          geolocation_support: 'Geolocation is not supported by this browser.',
          authorization: 'You are not authorised to perform this operation.',
        },
      },
    },
    ja: {
      translation: {
        buttons: {
          home: 'ホーム',
          food_cart: 'フードカート',
          create: 'フードカートを作成',
          sign_up: 'アカウントを作成',
          sign_in: 'ログイン',
          sign_out: 'ログアウト',
          search: '検索',
          nearby: '最寄りのフードカート',
          my_foodcarts: 'マイフードカート',
          file: '写真のアップロード',
          save_food_cart: '保存',
          save_food_item: '保存',
          delete: '削除',
          all: '全て',
          all_carts: '全てのフードカート',
          food: '食品',
          drinks: '飲み物',
          create_schedule: 'スケジュールを作成',
          create_food_item: '食べ物を作成',
          create_menu: 'メニューを作成',
          show_schedule: 'スケジュールを見る',
        },
        title: 'キッチンカート',
        mission: '外出先でも食べ物を簡単に見つけられるようにするとともに、地元企業の繁栄を支援します。',
        copyright: '© 2022 ブランドン、ダン、ホンジュ、ジョシュ、マリサ',
        search_bar: 'フードカート、場所',
        see_cart: 'フードカートを見る',
        closed: '本日休業',
        menu_title: 'メニュー',
        yen: '円',
        forms: {
          food_cart_form: {
            new: 'フードカートを作成',
            edit: 'フードカートの編集',
            name: 'フードカート',
            number: '電話番号',
            category: 'カテゴリ',
            description: 'フードカートの説明',
          },
          food_item_form: {
            new: 'フードアイテムを作成',
            edit: 'フードアイテムを編集',
            name: '食材名',
            description: '詳細',
            price: '価格',
            type: 'カテゴリ',
          },
          schedule_form: {
            title: 'スケジュール',
            new: 'スケジュールを作成',
            instruction: '地図上にピンを置いて、フードカートが置かれる場所を示します。',
            search_text: 'エリア名で検索',
            location: '所在地',
            open: 'オープニングタイム',
            close: 'クロージングタイム',
            nearest_station: '最寄駅',
          },
          schedule_view: {
            weekly: '週間スケジュール',
            add: '+ スケジュールの追加',
          },
          week: {
            mon: '月',
            tue: '火',
            wed: '水',
            thu: '木',
            fri: '金',
            sat: '土',
            sun: '日',
          },
          month: {
            jan: '1月',
            feb: '2月',
            mar: '3月',
            apr: '4月',
            may: '5月',
            jun: '6月',
            jul: '7月',
            aug: '8月',
            sep: '9月',
            oct: '10月',
            nov: '11月',
            dec: '12月',
          },
        },
        alerts: {
          geolocation: 'このアプリケーションを使用するには、ブラウザのGelocationを有効にしてください。',
          food_cart_open: 'このフードカートは現在オープンしていません。後日、再度ご確認ください。',
          map_location: '地図上で位置を特定してください。',
          start_time: '開始時間を選択してください。',
          end_time: '終了時間を選択してください。',
          early_end: '終了時刻は開始時刻よりも遅くなければなりません。',
          location: '場所の説明を追加してください。',
          geolocation_support: 'このブラウザではGeolocationはサポートされていません。',
          authorization: 'この操作を行う権限はありません。',
        },
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(translationData);

const root = document.getElementById('root');

if (root) {
  document.addEventListener('DOMContentLoaded', () => {
    // Render an entry point here;
    // const { t } = useTranslation();
    ReactDOM.render(<MainTemplate data={JSON.parse(root.dataset.data)} contentType={root.dataset.contentType} />, root);
  });
}
