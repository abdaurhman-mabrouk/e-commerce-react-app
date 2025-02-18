import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItemsList from '../../components/cart/CartItemsList/CartItemsList';
import './Cart.css';

function Cart() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <CartItemsList />
      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
