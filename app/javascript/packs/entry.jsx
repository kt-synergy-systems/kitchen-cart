import React from 'react';
import ReactDOM from 'react-dom';
import MainTemplate from './MainTemplate';

const root = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  // Render an entry point here;
  ReactDOM.render(<MainTemplate data={root.dataset.data} />, root);
});
