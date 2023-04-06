import { FC } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './Product.styles';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

interface CardProps {
  createdAt: Date;
  isRedemption: boolean;
  name: string;
  points: number;
  urlImage: string;
}

const Card: FC<CardProps> = ({ createdAt, isRedemption, name, points, urlImage }) => {
  const date = moment(createdAt).format('DD [de] MMMM, YYYY');
  const symbolColor = isRedemption ? '#FF0000' : '#00B833';
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: urlImage,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productDate}>{date}</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.pointsContainer}>
          <Text style={{ ...styles.symbol, color: symbolColor }}>{isRedemption ? '-' : '+'}</Text>
          <Text style={styles.points}>{points}</Text>
        </View>
        <Text style={styles.icon}>{'>'}</Text>
      </View>
    </View>
  );
};

export default Card;
