import { FC } from 'react';
import { Text, View } from 'react-native';
import styles from './Transactions.styles';

interface TransactionsProps {}

const Transactions: FC<TransactionsProps> = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>Tus Movimientos</Text>
      <View style={styles.cardsContainer}>
        
      </View>
    </View>
  );
};

export default Transactions;
