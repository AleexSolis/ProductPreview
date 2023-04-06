import React from 'react';
import { render } from '@testing-library/react-native';
import { Dashboard as DashboardClean } from '../../../src/views/Dashboard';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const Dashboard = () => (
  <QueryClientProvider client={queryClient}>
    <DashboardClean />
  </QueryClientProvider>
);

jest.useFakeTimers();

describe('Dashboard', () => {
  test('render title correctly', () => {
    render(<Dashboard />);
  });

  it('should render welcome message and user name', async () => {
    const { getByTestId } = render(<Dashboard />);
    const welcomeMessage = getByTestId('welcomeMessage');
    const userName = getByTestId('welcomeMessage');
    expect(welcomeMessage).toBeDefined();
    expect(userName).toBeDefined();
  });
});
