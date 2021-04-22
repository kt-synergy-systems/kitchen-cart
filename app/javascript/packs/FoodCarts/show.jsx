import { useState } from 'react';

const FoodCart = () => {
  const [foodCart, setFoodCart] = useState(window.foodCart);
  const [textContent, setTextContent] = useState('I am a food cart! Click me!');
  const handleClick = () => {
    textContent === 'I am a food cart!🚂 Click me!'
      ? setTextContent('I am onigiri! 🍙 Click me!')
      : setTextContent('I am a food cart!🚂 Click me!');
  };
  return (
    <div className="FoodCart" onClick={handleClick}>
      {textContent}
      {foodCart.map((data) => JSON.stringify(data))}
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<FoodCart />, document.body.appendChild(document.createElement('div')));
});
