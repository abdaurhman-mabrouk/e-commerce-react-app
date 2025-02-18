import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {
  validateEmail,
  validatePostalCode,
  validateNonEmptyString,
} from '../../../utils/validators';
import './CheckoutForm.css';

const CheckoutForm = ({ onSubmit }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateNonEmptyString(formData.name)) {
      setError('Name is required');
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Invalid email address');
      setLoading(false);
      return;
    }

    if (!validateNonEmptyString(formData.address)) {
      setError('Address is required');
      setLoading(false);
      return;
    }

    if (!validateNonEmptyString(formData.city)) {
      setError('City is required');
      setLoading(false);
      return;
    }

    if (!validateNonEmptyString(formData.state)) {
      setError('State is required');
      setLoading(false);
      return;
    }

    if (!validatePostalCode(formData.zip)) {
      setError('Invalid ZIP code');
      setLoading(false);
      return;
    }

    if (!stripe || !elements) {
      setError('Stripe has not loaded yet. Please try again later.');
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: formData.name,
        email: formData.email,
        address: {
          line1: formData.address,
          city: formData.city,
          state: formData.state,
          postal_code: formData.zip,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      onSubmit(paymentMethod);
      setLoading(false);
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      {error && <div className="error">{error}</div>}
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="zip">Zip Code</label>
        <input
          type="text"
          id="zip"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cardElement">Card Details</label>
        <CardElement id="cardElement" />
      </div>
      <button type="submit" className="checkout-button" disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default CheckoutForm;
