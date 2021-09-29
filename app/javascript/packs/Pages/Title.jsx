import React from 'react';
import ReactDOM from 'react-dom';
import KitchenCartLogo from '../../../assets/images/kitchen-cart-logo.png';

const Title = () => {
  return (
    <div className='home-container'>
      <div className='home-logo'>
        <img 
          src={KitchenCartLogo} alt='Kitchen Cart logo'
          />
        <h1><strong>Kitchen Cart</strong></h1>
      </div>
      <div className='search-container'></div>
      <div className='main-intro-card'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <footer>
        © 2021 Brandon, Dan, Hongjoo, Josh, and Marisa
      </footer>
    </div>
  );
}

export default Title;
