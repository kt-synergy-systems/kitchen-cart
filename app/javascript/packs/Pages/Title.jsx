import React from 'react';
import ReactDOM from 'react-dom';
import KitchenCartLogo from '../../../assets/images/kitchen-cart-logo.png';
import { useTranslation } from "react-i18next";

const Title = () => {
  const translateThis = useTranslation()
  console.log(translateThis)
  return (
    <div className='home-container'>
      <div className='home-logo'>
        <img 
          src={KitchenCartLogo} alt='Kitchen Cart logo'
          />
        <h1><strong>{translateThis.t("title")}</strong></h1>
      </div>
      <div className='search-container'></div>
      <div className='main-intro-card'>
      {translateThis.t("mission")}
      </div>
      <footer>
        © 2021 Brandon, Dan, Hongjoo, Josh, and Marisa
      </footer>
    </div>
  );
}

export default Title;
