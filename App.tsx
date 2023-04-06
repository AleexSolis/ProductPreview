import { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider, focusManager } from 'react-query';
import { Dashboard } from './src/views';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <Dashboard />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
