import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Product } from '../../src/components';

describe('Product', () => {
  const mockProduct = {
    createdAt: new Date(),
    isRedemption: false,
    name: 'Product Name',
    points: 100,
    urlImage: 'https://placehold.co/640x480',
  };
  const mockOnPress = jest.fn();

  it('should render with correct product information', async () => {
    const { getByText, getByTestId } = render(<Product {...mockProduct} />);
    expect(getByText(mockProduct.name)).toBeDefined();
    expect(getByTestId('productDate').props.children).toEqual(expect.any(String));
    expect(getByText(mockProduct.points.toString())).toBeDefined();
    const image = getByTestId('productImage');

    await waitFor(() => {
      expect(image.props.source.uri).toEqual(mockProduct.urlImage);
    });
  });

  it('should execute onPress event when right container is pressed', () => {
    const { getByTestId } = render(<Product {...mockProduct} onPress={mockOnPress} />);
    const rightContainer = getByTestId('cardContainer');
    fireEvent.press(rightContainer);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
