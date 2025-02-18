import React from 'react';
import CheckoutForm from '../../components/checkout/CheckoutForm/CheckoutForm';
import './Checkout.css';

function Checkout() {
  const handleCheckout = async (paymentMethod) => {
    // Handle form submission, e.g., send data to the server
    console.log('Payment method:', paymentMethod);
    // Here you would send the paymentMethod.id to your server to create a payment intent
    // and confirm the payment
    alert('Order placed successfully!');
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <CheckoutForm onSubmit={handleCheckout} />
    </div>
  );
}

export default Checkout;
