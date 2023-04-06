import 'react-native';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Points } from '../../../../src/views/Dashboard/sections/Points';

describe('Points', () => {
  const testProps = {
    month: 'Diciembre',
    points: 1_100,
  };

  it('renders correctly', () => {
    render(<Points {...testProps} />);
  });

  test('render title correctly', () => {
    const { getByText } = render(<Points {...testProps} title="Tus Puntos" />);
    const titleElement = getByText('Tus Puntos');
    expect(titleElement).toBeDefined();
  });

  it('check the format of the points', () => {
    render(<Points {...testProps} />);

    expect(screen.getByText(/(\d{1,3},)*\.(\d{2})\s(pts)/)).toBeDefined();
  });
});
