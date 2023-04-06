import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../../src/components';

describe('Button', () => {
  const onPressMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render with correct label', () => {
    const { getByText } = render(<Button label="Press me" />);
    expect(getByText('Press me')).toBeDefined();
  });

  it('should execute onPress event when pressed', () => {
    const { getByText } = render(<Button label="Press me" onPress={onPressMock} />);
    const button = getByText('Press me');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });
});
