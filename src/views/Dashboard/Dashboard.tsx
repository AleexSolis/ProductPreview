import { FC, useMemo, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import { Points, Transactions } from './sections';
import styles from './Dashboard.styles';
import { getProducts } from '../../api/products';
import { Button } from '../../components';
import { useProductContext } from '../../context/ProductContext';
import { Product } from '../../types';

type filter = 'all' | 'positive' | 'negative';
interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  const { data, isLoading } = useQuery('products', getProducts);
  const [filter, setFilter] = useState<filter>('all');
  const { setSelectedProduct } = useProductContext();
  const navigation = useNavigation();

  const removeFilters = () => setFilter('all');
  const filterByWins = () => setFilter('positive');
  const filterByRedeemed = () => setFilter('negative');

  const goToDetails = (product: Product) => {
    setSelectedProduct(product);
    navigation.navigate('Details');
  };

  const products = useMemo(() => {
    if (filter === 'all') {
      return data;
    }
    // If is_redemption is false then the symbol is positive and if true it is negative.
    return data?.filter(({ is_redemption }) =>
      filter === 'positive' ? !is_redemption : is_redemption
    );
  }, [data, filter]);

  const totalPoints = useMemo(() => {
    return data?.reduce(
      (total, current) => (current.is_redemption ? total - current.points : total + current.points),
      0
    );
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={styles.message} testID="welcomeMessage">
        Bienvenido de vuelta!
      </Text>
      <Text testID="userName" style={styles.user}>
        Ruben Rodriguez
      </Text>
      {isLoading ? (
        <ActivityIndicator style={styles.loadingContainer} size="large" />
      ) : (
        <>
          <Points month="Diciembre" points={totalPoints || 0} />
          <Transactions products={products} onProductPress={goToDetails} />
        </>
      )}
      {filter === 'all' ? (
        <View style={styles.buttonsContainer}>
          <Button fontStyle={styles.button} label="Ganados" onPress={filterByWins} />
          <Button fontStyle={styles.button} label="Canjeados" onPress={filterByRedeemed} />
        </View>
      ) : (
        <Button label="Todos" onPress={removeFilters} />
      )}
    </View>
  );
};

export default Dashboard;
