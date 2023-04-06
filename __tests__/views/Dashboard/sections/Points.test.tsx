import 'react-native';
import React from 'react';
import { Points } from '../../../../src/views/Dashboard/sections/Points';
import { render, screen } from '@testing-library/react-native';

describe('Points', () => {
  const testProps = {
    month: 'Diciembre',
    points: 1_100,
  };

  it('renders correctly', () => {
    render(<Points {...testProps} />);
  });

  it('check the format of the points', () => {
    render(<Points {...testProps} />);

    expect(screen.getByText(/(\d{1,3},)*\.(\d{2})\s(pts)/)).toBeDefined();
  });
});
