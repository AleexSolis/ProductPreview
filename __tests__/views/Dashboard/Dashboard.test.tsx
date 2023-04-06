import 'react-native';
import React from 'react';
import { Dashboard } from '../../../src/views/Dashboard';
import { render, screen, fireEvent } from '@testing-library/react-native';

it('renders correctly', () => {
  render(<Dashboard />);
});