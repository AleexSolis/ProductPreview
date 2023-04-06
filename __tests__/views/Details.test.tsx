import React from 'react';
import { render } from '@testing-library/react-native';
import { Details } from '../../src/views';

describe('render Details', () => {
  it('renders the product name', () => {
    render(<Details />);
  });
});
