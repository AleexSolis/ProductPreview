import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Dashboard, Details } from './src/views';
import { ProductProvider } from './src/context/ProductContext';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

const Stack = createNativeStackNavigator();

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </ProductProvider>
    </QueryClientProvider>
  );
};

export default App;
