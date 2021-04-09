import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Title from './Title';

const Home = () => {
  return (
    <div className="Home">
      <Title />
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Home />, document.body.appendChild(document.createElement('div')));
});
