import React from 'react';
import { CartProvider } from './CartContext';
import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './ThemeContext';
import StripeContext from './StripeContext';

const MainProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <StripeContext>{children}</StripeContext>
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default MainProvider;
