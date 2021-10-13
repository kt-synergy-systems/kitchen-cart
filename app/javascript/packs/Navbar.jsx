import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

let hoveringOverLinks = false;

const Navbar = ({ user }) => {
  const t = useTranslation().t;
  const width = useState();
  const [linksOut, setLinksOut] = useState(false);

  const linkOutTimer = () => {
    setTimeout(() => {
      if (!hoveringOverLinks) setLinksOut(false);
    }, 5000);
  };
  const hamburgerClick = () => {
    linksOut ? setLinksOut(false) : setLinksOut(true);
    linkOutTimer();
  };

  const linksOpenStyle = {
    position: 'fixed',
    top: '60px',
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 800) {
        setLinksOut(false);
      }
    });
    document.addEventListener('click', (e) => {
      if (
        e.target.className !== 'hamburger' &&
        e.target.className !== 'hamburger-slice'
      ) {
        setLinksOut(false);
      }
    });
  }, [linksOut]);
  return (
    <div className='our-nav'>
      <div
        className='nav-bar-links'
        style={linksOut ? linksOpenStyle : {}}
        onMouseOver={() => (hoveringOverLinks = true)}
        onMouseOut={() => {
          hoveringOverLinks = false;
          linkOutTimer();
        }}>
        <a href='/'>{t('buttons.home')}</a>
        <a href='/food_carts'>{t('buttons.food_cart')}</a>
        <a href='/food_carts/new'>{t('buttons.create')} </a>
        {user ? (
          <a href='/users/sign_out'>{t('buttons.sign_out')}</a>
        ) : (
          <>
            <a href='/users/sign_up'>{t('buttons.sign_up')}</a>
            <a href='/users/sign_in'>{t('buttons.sign_in')}</a>{' '}
          </>
        )}
      </div>
      <div className='hamburger' onClick={hamburgerClick}>
        <div className='hamburger-slice'></div>
        <div className='hamburger-slice'></div>
        <div className='hamburger-slice'></div>
      </div>
    </div>
  );
};

export default Navbar;
