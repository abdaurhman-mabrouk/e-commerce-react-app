import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
// import * as productService from './services/productService';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = await waitFor(() =>
    screen.findByText(/Welcome to Our E-Commerce Store/i)
  );
  expect(linkElement).toBeInTheDocument();
});
