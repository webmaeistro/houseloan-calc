import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders home and about footer link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/react /);
  expect(linkElement).toBeInTheDocument();
});
