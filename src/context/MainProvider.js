// filepath: /D:/Programming/Projects/React.js/e-commerce-react-app/src/context/MainProvider.js
import React from 'react';
import { CartProvider } from './CartContext';
import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './ThemeContext';

const MainProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>{children}</CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default MainProvider;
