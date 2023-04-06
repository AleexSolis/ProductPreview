import { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './Transactions.styles';
import { Product } from '../../../../components';

interface Products {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
}
interface TransactionsProps {
  title?: string;
  products: Array<Products>;
}

const defaultProps = {
  title: 'Tus Movimientos',
};

const Transactions: FC<TransactionsProps> = ({ title, products }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.cardsContainer}>
        <ScrollView style={styles.scrollContainer}>
          {products.map((product) => (
            <Product
              key={product.id}
              createdAt={new Date(product.createdAt)}
              isRedemption={product.is_redemption}
              name={product.product}
              points={product.points}
              urlImage={product.image}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

Transactions.defaultProps = defaultProps;

export default Transactions;
