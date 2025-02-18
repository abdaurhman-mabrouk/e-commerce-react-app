// src/components/cart/CartItem/CartItem.js

import React from 'react';
import './CartItem.css';

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <span className="cart-item-name">{item.name}</span>
      <span className="cart-item-price">${item.price}</span>
    </div>
  );
}

export default CartItem;
