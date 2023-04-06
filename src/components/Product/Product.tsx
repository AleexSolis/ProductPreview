import { FC, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './Product.styles';
import moment from 'moment';
import 'moment/locale/es';
import { Product as ProductType } from '../../types';
import { getImageFromLoremFlickr } from '../../utils/image';

moment.defineLocale('es', null);

interface ProductProps {
  data: ProductType;
  onPress?: (product: ProductType) => void;
  testID?: string;
}

const Product: FC<ProductProps> = ({ data, onPress, testID }) => {
  const { createdAt, image, is_redemption, points, product } = data;
  const [urlImage, setUrlImage] = useState<string>();
  const date = moment(createdAt, 'DD [de] MMMM, YYYY').format('DD [de] MMMM, YYYY');
  const symbolColor = is_redemption ? '#FF0000' : '#00B833';
  const formatPoints = new Intl.NumberFormat('en-US').format(points);

  const onPressProduct = () => {
    if (onPress) onPress({ ...data, image: urlImage || 'https://placehold.co/640x480' });
  };

  useEffect(() => {
    const urlImage = async () => {
      const url = await getImageFromLoremFlickr(image);
      setUrlImage(url);
    };
    urlImage();
  }, []);

  return (
    <TouchableOpacity
      testID={testID || 'cardContainer'}
      style={styles.container}
      onPress={onPressProduct}
    >
      <Image
        style={styles.image}
        source={{
          uri: urlImage ? urlImage : 'https://placehold.co/640x480',
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
          <Text style={styles.points}>{formatPoints}</Text>
        </View>
        <Text style={styles.icon}>{'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
