import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import MainProvider from './context/MainProvider';

test('renders welcome message', async () => {
  render(
    <BrowserRouter>
      <MainProvider>
        <App />
      </MainProvider>
    </BrowserRouter>
  );
  const linkElement = await screen.findByText(
    /Welcome to Our E-Commerce Store/i
  );
  expect(linkElement).toBeInTheDocument();
});
