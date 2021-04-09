import React from 'react';
import { useState } from 'react';

const FoodCart = () => {
  const [textContent, setTextContent] = useState('I am a food cart! Click me!');
  const handleClick = () => {
    textContent === 'I am a food cart!🚂 Click me!'
      ? setTextContent('I am onigiri! 🍙 Click me!')
      : setTextContent('I am a food cart!🚂 Click me!');
  };
  return (
    <div className="FoodCart" onClick={handleClick}>
      {textContext}
    </div>
  );
};

export default FoodCart;
