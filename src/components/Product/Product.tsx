import { FC } from 'react';
import { GestureResponderEvent, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './Product.styles';
import moment from 'moment';
import 'moment/locale/es';

moment.defineLocale('es', null);

interface ProductProps {
  createdAt: Date;
  isRedemption: boolean;
  name: string;
  onPress?: (event: GestureResponderEvent) => void;
  points: number;
  testID?: string;
  urlImage: string;
}

const Product: FC<ProductProps> = ({
  createdAt,
  isRedemption,
  name,
  onPress,
  points,
  testID,
  urlImage,
}) => {
  const date = moment(createdAt).format('DD [de] MMMM, YYYY');
  const symbolColor = isRedemption ? '#FF0000' : '#00B833';

  return (
    <TouchableOpacity testID={testID || 'cardContainer'} style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: urlImage,
        }}
        testID="productImage"
      />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text testID="productDate" style={styles.productDate}>
          {date}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.pointsContainer}>
          <Text style={{ ...styles.symbol, color: symbolColor }}>{isRedemption ? '-' : '+'}</Text>
          <Text style={styles.points}>{points}</Text>
        </View>
        <Text style={styles.icon}>{'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
