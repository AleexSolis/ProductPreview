import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Product } from '../../src/components';

describe('Product', () => {
  const mockProduct = {
    data: {
      id: '1',
      createdAt: new Date().toISOString(),
      is_redemption: false,
      product: 'Product Name',
      points: 100,
      image: 'https://placehold.co/640x480',
    },
  };
  const mockOnPress = jest.fn();

  it('should render with correct product information', async () => {
    const { getByText, getByTestId } = render(<Product {...mockProduct} />);
    expect(getByText(mockProduct.data.product)).toBeDefined();
    expect(getByTestId('productDate').props.children).toEqual(expect.any(String));
    expect(getByText(mockProduct.data.points.toString())).toBeDefined();
    const image = getByTestId('productImage');

    await waitFor(() => {
      expect(image.props.source.uri).toEqual(mockProduct.data.image);
    });
  });

  it('should execute onPress event when right container is pressed', () => {
    const { getByTestId } = render(<Product {...mockProduct} onPress={mockOnPress} />);
    const rightContainer = getByTestId('cardContainer');
    fireEvent.press(rightContainer);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
