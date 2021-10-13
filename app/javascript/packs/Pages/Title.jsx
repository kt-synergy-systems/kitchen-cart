import React from 'react';
import ReactDOM from 'react-dom';
import KitchenCartLogo from '../../../assets/images/kitchen-cart-logo.png';
import { useTranslation } from 'react-i18next';
const Title = () => {
  const t = useTranslation().t;
  return (
    <div className='home-container'>
      <div className='home-logo'>
        <img src={KitchenCartLogo} alt='Kitchen Cart logo' />
        <h1>
          <strong>{t('title')}</strong>
        </h1>
      </div>
      <div className='search-container'></div>
      <div className='main-intro-card'>{t('mission')}</div>
      <footer>© 2021 Brandon, Dan, Hongjoo, Josh, and Marisa</footer>
    </div>
  );
};

export default Title;
