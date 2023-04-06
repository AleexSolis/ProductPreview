import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Transactions } from '../../../../src/views/Dashboard/sections';

const products = [
  {
    id: '1',
    createdAt: '2022-04-01T09:00:00Z',
    is_redemption: false,
    product: 'Producto 1',
    points: 10,
    image: 'https://placehold.co/640x480',
  },
  {
    id: '2',
    createdAt: '2022-04-02T10:00:00Z',
    is_redemption: true,
    product: 'Producto 2',
    points: 20,
    image: 'https://placehold.co/640x480',
  },
];

const mockedFunctions = {
  onFilterChangeText: jest.fn(),
  onFilterSubmit: jest.fn(),
};

describe('Transactions', () => {
  test('render title correctly', () => {
    const { getByText } = render(<Transactions title="Tus Movimientos" />);
    const titleElement = getByText('Tus Movimientos');
    expect(titleElement).toBeDefined();
  });

  test('render message when there is no movement', () => {
    const { getByText } = render(<Transactions />);
    const emptyTextElement = getByText('Actualmente no tienes movimientos.');
    expect(emptyTextElement).toBeDefined();
  });

  test('renders the quantity of products received', () => {
    
    const { getAllByTestId } = render(<Transactions products={products} />);
    const productElements = getAllByTestId('product');
    expect(productElements.length).toBe(products.length);
  });

  it('calls onFilterChangeText function when onChangeText on input is called', () => {
    const { getByTestId } = render(<Transactions products={products} onFilterChangeText={mockedFunctions.onFilterChangeText} />);

    fireEvent.changeText(getByTestId('filer'), "test");
    expect(mockedFunctions.onFilterChangeText).toHaveBeenCalled();
  });

});
