import { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './Transactions.styles';
import { Product } from '../../../../components';
import { Product as ProductType } from '../../../../types';

interface TransactionsProps {
  title?: string;
  products?: Array<ProductType>;
}

const defaultProps = {
  title: 'Tus Movimientos',
};

const Transactions: FC<TransactionsProps> = ({ title, products }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.cardsContainer}>
        {products ? (
          <ScrollView style={styles.scrollContainer}>
            {products.map((product) => (
              <Product
                createdAt={new Date(product.createdAt)}
                isRedemption={product.is_redemption}
                key={product.id}
                name={product.product}
                points={product.points}
                testID="product"
                urlImage={product.image}
              />
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
