import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import './CartItemsList.css';

const CartItemsList = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } =
    useContext(CartContext);

  return (
    <div className="cart-items-list">
      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} className="cart-item-image" />
          <div className="cart-item-details">
            <h3 className="cart-item-title">{item.title}</h3>
            <p className="cart-item-price">${item.price}</p>
            <div className="cart-item-quantity">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}>
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="cart-item-remove">
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CartItemsList;
