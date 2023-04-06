import { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './Product.styles';
import moment from 'moment';
import 'moment/locale/es';
import { Product as ProductType } from '../../types';

moment.defineLocale('es', null);

interface ProductProps {
  data: ProductType;
  onPress?: (product: ProductType) => void;
  testID?: string;
}

const Product: FC<ProductProps> = ({ data, onPress, testID }) => {
  const { createdAt, image, is_redemption, points, product } = data;
  const date = moment(createdAt).format('DD [de] MMMM, YYYY');
  const symbolColor = is_redemption ? '#FF0000' : '#00B833';

  const onPressProduct = () => {
    if (onPress) onPress(data);
  };

  return (
    <TouchableOpacity
      testID={testID || 'cardContainer'}
      style={styles.container}
      onPress={onPressProduct}
    >
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
        testID="productImage"
      />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{product}</Text>
        <Text testID="productDate" style={styles.productDate}>
          {date}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.pointsContainer}>
          <Text style={{ ...styles.symbol, color: symbolColor }}>{is_redemption ? '-' : '+'}</Text>
          <Text style={styles.points}>{points}</Text>
        </View>
        <Text style={styles.icon}>{'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
