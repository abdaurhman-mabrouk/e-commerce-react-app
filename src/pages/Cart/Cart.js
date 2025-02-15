// filepath: /D:/Programming/Projects/React.js/e-commerce-react-app/src/pages/Cart/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
