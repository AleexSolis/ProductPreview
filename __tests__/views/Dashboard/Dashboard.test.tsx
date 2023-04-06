import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { Dashboard } from '../../../src/views';
import { ProductContext } from '../../../src/context/ProductContext';

const mockProducts = [
  {
    id: '1',
    product: 'Product 1',
    image: 'https://placehold.co/640x480',
    is_redemption: true,
    points: 100,
    createdAt: new Date().toDateString(),
  },
  {
    id: '2',
    product: 'Product 2',
    image: 'https://placehold.co/640x480',
    is_redemption: false,
    points: 100,
    createdAt: new Date().toDateString(),
  },
  {
    id: '3',
    product: 'Product 3',
    image: 'https://placehold.co/640x480',
    is_redemption: true,
    points: 100,
    createdAt: new Date().toDateString(),
  },
];

const mockedNavigation = {
  goBack: jest.fn(),
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => mockedNavigation,
}));

jest.mock('react-query', () => ({
  useQuery: () => ({
    data: mockProducts,
    isLoading: false,
  }),
}));

const DashboardWrapper = () => (
  <ProductContext.Provider
    value={{ selectedProduct: mockProducts[0], setSelectedProduct: jest.fn() }}
  >
    <Dashboard />
  </ProductContext.Provider>
);

describe('Dashboard', () => {
  it('render dashboard', async () => {
    const { getByText, getByTestId } = render(<DashboardWrapper />);

    expect(getByText('Bienvenido de vuelta!')).not.toBeNull();

    await waitFor(() => expect(getByTestId('points')).not.toBeNull());
    await waitFor(() => expect(getByTestId('transactions')).not.toBeNull());
  });

  it('updates filter state and renders products list correctly', async () => {
    const { getByText, getByTestId, queryByText } = render(<DashboardWrapper />);

    await waitFor(() => expect(getByTestId('transactions')).not.toBeNull());

    expect(getByText('Product 1')).not.toBeNull();
    expect(getByText('Product 2')).not.toBeNull();
    expect(getByText('Product 3')).not.toBeNull();

    // Click the "Ganados" button.
    fireEvent.press(getByTestId('wins'));

    // Check that only the "ganados" product is displayed.
    expect(queryByText('Product 1')).toBeNull();
    expect(getByText('Product 2')).not.toBeNull();
    expect(queryByText('Product 3')).toBeNull();

     // Click the "Todos" button.
     fireEvent.press(getByTestId('all'));

     // Check that all products are displayed again.
     expect(getByText('Product 1')).not.toBeNull();
     expect(getByText('Product 2')).not.toBeNull();
     expect(getByText('Product 3')).not.toBeNull();

    // Click the "Canjeados" button.
    fireEvent.press(getByTestId('redeemed'));

    // Check that only the "canjeados" product is displayed.
    expect(getByText('Product 1')).not.toBeNull();
    expect(queryByText('Product 2')).toBeNull();
    expect(getByText('Product 3')).not.toBeNull();   
  });

  it('search correctly', async () => {
    const { getByText, getByTestId, queryByText } = render(<DashboardWrapper />);

    const searchInput = getByTestId('filer');
    fireEvent.changeText(searchInput, "Product 2");
    fireEvent(searchInput, 'onEndEditing');

    expect(queryByText('Product 1')).toBeNull();
    expect(getByText('Product 2')).not.toBeNull();
    expect(queryByText('Product 3')).toBeNull();
  });
});
