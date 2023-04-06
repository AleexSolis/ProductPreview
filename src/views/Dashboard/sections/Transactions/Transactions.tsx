import { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './Transactions.styles';
import { Product } from '../../../../components';
import { Product as ProductType } from '../../../../types';

interface TransactionsProps {
  title?: string;
  products?: Array<ProductType>;
  onProductPress?: (product: ProductType) => void;
  testID?: string;
}

const defaultProps = {
  title: 'Tus Movimientos',
};

const Transactions: FC<TransactionsProps> = ({ title, products, onProductPress, testID }) => {
  return (
    <View style={styles.sectionContainer} testID={testID}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.cardsContainer}>
        {products ? (
          <ScrollView style={styles.scrollContainer}>
            {products.map((product) => (
              <Product data={product} key={product.id} onPress={onProductPress} testID="product" />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.empty}>Actualmente no tienes movimientos.</Text>
          </View>
        )}
      </View>
    </View>
  );
};

Transactions.defaultProps = defaultProps;

export default Transactions;
