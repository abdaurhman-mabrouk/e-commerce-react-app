import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-here');

const StripeContext = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeContext;
