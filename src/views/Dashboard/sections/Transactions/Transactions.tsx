import { FC, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import styles from './Transactions.styles';
import { Product } from '../../../../components';
import { Product as ProductType } from '../../../../types';

interface TransactionsProps {
  title?: string;
  products?: Array<ProductType>;
  onProductPress?: (product: ProductType) => void;
  testID?: string;
  onFilterChangeText?: (e: any) => void;
  onFilterSubmit?: (e: string) => void;
}

const defaultProps = {
  title: 'Tus Movimientos',
};

const Transactions: FC<TransactionsProps> = ({
  title,
  products,
  onProductPress,
  testID,
  onFilterChangeText,
  onFilterSubmit,
}) => {
  const [filter, setFilter] = useState('');

  const handleChangeText = (value: string) => {
    setFilter(value);
    if (onFilterChangeText) onFilterChangeText(value);
  };

  const handleFilterSubmit = () => {
    if (onFilterSubmit) onFilterSubmit(filter);
  };

  return (
    <View style={styles.sectionContainer} testID={testID}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          testID="filer"
          style={styles.input}
          placeholder="Filter"
          value={filter}
          onChangeText={handleChangeText}
          onEndEditing={handleFilterSubmit}
        />
      </View>
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
