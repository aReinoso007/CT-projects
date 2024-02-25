/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import NavigationBar from '../components/NavigationBar';

test('renders navigation links', () => {
  render(
    <BrowserRouter>
      <NavigationBar />
    </BrowserRouter>
  );

  const homeLink = screen.getByText('Home');
  const addCustomerLink = screen.getByText('Add Customer');
  const customersLink = screen.getByText('Customers');
  const addProductLink = screen.getByText('Add Product');
  const productsLink = screen.getByText('Products');

  expect(homeLink).toBeInTheDocument();
  expect(addCustomerLink).toBeInTheDocument();
  expect(customersLink).toBeInTheDocument();
  expect(addProductLink).toBeInTheDocument();
  expect(productsLink).toBeInTheDocument();
});