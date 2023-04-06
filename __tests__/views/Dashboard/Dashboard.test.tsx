import 'react-native';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render } from '@testing-library/react-native';
import { Dashboard } from '../../../src/views/Dashboard';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

jest.useFakeTimers()

describe('Dashboard', () => {
  it('renders correctly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    );
  });
});
