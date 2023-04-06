import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ProductContext } from '../../src/context/ProductContext';
import { Details } from '../../src/views';
import moment from 'moment';
import { Product } from '../../src/types';

const mockedNavigation = {
  goBack: jest.fn(),
  dispatch: jest.fn(),
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => mockedNavigation,
  CommonActions: {
    setParams: () => jest.fn(),
  },
}));

const product = {
  id: '1',
  product: 'Producto de ejemplo',
  image: 'https://placehold.co/640x480',
  is_redemption: true,
  points: 100,
  createdAt: new Date().toDateString(),
};

const DetailsWrapper = ({ selectedProduct }: { selectedProduct: Product | undefined }) => (
  <ProductContext.Provider value={{ selectedProduct, setSelectedProduct: jest.fn() }}>
    <Details />
  </ProductContext.Provider>
);

describe('Details component', () => {
  it('renders correctly with selected product', () => {
    const { getByText, getByTestId } = render(<DetailsWrapper selectedProduct={product} />);
    expect(getByTestId('date').props.children).toEqual(
      `Comprado el ${moment(product.createdAt, 'DD [de] MMMM, YYYY').format('DD [de] MMMM, YYYY')}`
    );
    expect(getByText(`Con esta compra acumulaste`)).toBeDefined();
    expect(getByText(`${product.points} puntos`)).toBeDefined();
  });

  it('renders "Not found" message when there is no selected product', () => {
    const { getByText } = render(<DetailsWrapper selectedProduct={undefined} />);

    expect(getByText('Not found')).toBeDefined();
  });

  it('calls goBack function when "Aceptar" button is pressed', () => {
    const { getByText } = render(<DetailsWrapper selectedProduct={product} />);

    fireEvent.press(getByText('Aceptar'));
    expect(mockedNavigation.goBack).toHaveBeenCalled();
  });
});
