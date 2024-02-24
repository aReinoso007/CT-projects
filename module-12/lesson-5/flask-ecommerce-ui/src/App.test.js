/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react';
import HomePage from './components/HomePage';

//Testing the HomePage.jsx component
test('renders welcome message', () => {
  render(<HomePage />);
  const welcomeMessage = screen.getByText(/Welcome to Our E-Commerce App/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders description', () => {
  render(<HomePage />);
  const description = screen.getByText(/This is the place to find all your needs at one click./i);
  expect(description).toBeInTheDocument();
});