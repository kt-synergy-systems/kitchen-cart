import React from 'react';
import KitchenCartLogo from '../../../assets/images/kitchen-cart-logo.png';
import { useTranslation } from 'react-i18next';
const Title = () => {
  const t = useTranslation().t;
  return (
    <div className='home-container'>
      <div className='home-logo'>
        <a href="/food_carts">
          <img src={KitchenCartLogo} alt='See all food carts' />
        </a>
        <h1>
          <strong>{t('title')}</strong>
        </h1>
      </div>
      <div className='search-container'></div>
      <div className='main-intro-card'>{t('mission')}</div>
      <footer>© 2022 Kitchen Cart</footer>
    </div>
  );
};

export default Title;
