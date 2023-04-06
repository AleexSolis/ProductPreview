import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Dashboard, Details } from './src/views';
import { ProductProvider } from './src/context/ProductContext';
import { Text, View } from 'react-native';

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
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={({ route }) => ({
                title: route?.params?.name,
                headerStyle: {
                  backgroundColor: '#CFD6FF',
                },
                headerTitleStyle: {
                  fontWeight: '800',
                  fontSize: 24,
                },
                headerTitleAlign: 'left',
                headerLeft: () => <Text>{''}</Text>,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ProductProvider>
    </QueryClientProvider>
  );
};

export default App;
