import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProductContext } from '../../src/context/ProductContext';
import { Details as DetailsClean } from '../../src/views';
import moment from 'moment';
import { Product } from '../../src/types';

const mockedNavigation = {
  goBack: jest.fn(),
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => mockedNavigation,
}));

const product = {
  id: '1',
  product: 'Producto de ejemplo',
  image: 'https://placehold.co/640x480',
  is_redemption: true,
  points: 100,
  createdAt: new Date().toDateString(),
};

const Details = ({ selectedProduct }: { selectedProduct: Product | undefined }) => (
  <ProductContext.Provider value={{ selectedProduct, setSelectedProduct: () => null }}>
    <DetailsClean />
  </ProductContext.Provider>
);

describe('Details component', () => {
  it('renders correctly with selected product', () => {
    const { getByText, getByTestId } = render(<Details selectedProduct={product} />);
    expect(getByTestId('date').props.children).toEqual(
      `Comprado el ${moment(product.createdAt, 'DD [de] MMMM, YYYY').format('DD [de] MMMM, YYYY')}`
    );
    expect(getByText(`Con esta compra acumulaste`)).toBeDefined();
    expect(getByText(`${product.points} puntos`)).toBeDefined();
  });

  it('renders "Not found" message when there is no selected product', () => {
    const { getByText } = render(<Details selectedProduct={undefined} />);

    expect(getByText('Not found')).toBeDefined();
  });

  it('calls goBack function when "Aceptar" button is pressed', () => {
    const { getByText } = render(<Details selectedProduct={product} />);

    fireEvent.press(getByText('Aceptar'));
    expect(mockedNavigation.goBack).toHaveBeenCalled();
  });
});
