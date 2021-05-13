import React from 'react';
import ReactDOM from 'react-dom';
import MainTemplate from './MainTemplate';

const root = document.getElementById('root');
console.log(root);

document.addEventListener('DOMContentLoaded', () => {
  // Render an entry point here;
  ReactDOM.render(<MainTemplate data={JSON.parse(root.dataset.data)} contentType={root.dataset.contentType} />, root);
});
