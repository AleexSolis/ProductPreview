import { FC, useMemo, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import { Points, Transactions } from './sections';
import moment from 'moment'
import styles from './Dashboard.styles';
import { getProducts } from '../../api/products';
import { Button } from '../../components';
import { useProductContext } from '../../context/ProductContext';
import { Product } from '../../types';

type filter = 'all' | 'positive' | 'negative';
interface DashboardProps {}
const month = moment(new Date(),'MMMM').format('MMMM');

const Dashboard: FC<DashboardProps> = () => {
  const { data, isLoading } = useQuery('products', getProducts);
  const [filter, setFilter] = useState<filter>('all');
  const [search, setSearch] = useState<string>();
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
    let originalProducts = data;

    if (search) {
      originalProducts = data?.filter(({ product }) => product.includes(search));
    }

    if (filter === 'all') {
      return originalProducts;
    }
    // If is_redemption is false then the symbol is positive and if true it is negative.
    return originalProducts?.filter(({ is_redemption }) =>
      filter === 'positive' ? !is_redemption : is_redemption
    );
  }, [data, filter, search]);

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
          <Points testID="points" month={month} points={totalPoints || 0} />
          <Transactions
            testID="transactions"
            products={products}
            onProductPress={goToDetails}
            onFilterSubmit={setSearch}
          />
        </>
      )}
      <View style={styles.buttonContainer}>
        {filter === 'all' ? (
          <View style={styles.buttonsContainer}>
            <Button
              testID="wins"
              fontStyle={styles.button}
              label="Ganados"
              onPress={filterByWins}
            />
            <Button
              testID="redeemed"
              fontStyle={styles.button}
              label="Canjeados"
              onPress={filterByRedeemed}
            />
          </View>
        ) : (
          <Button testID="all" label="Todos" onPress={removeFilters} />
        )}
      </View>
    </View>
  );
};

export default Dashboard;
