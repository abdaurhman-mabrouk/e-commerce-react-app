import React from 'react';
import './CartSummary.css';

function CartSummary({ total }) {
  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <p className="cart-summary-total">Total: ${total}</p>
    </div>
  );
}

export default CartSummary;
