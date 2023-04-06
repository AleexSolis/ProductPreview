import { FC } from 'react';
import { Text, View } from 'react-native';
import styles from './Points.styles';

interface PointsProps {
  month: string;
  points: number;
  testID?: string;
  title?: string;
}

const defaultProps = {
  title: 'Tus Puntos',
};

const Points: FC<PointsProps> = ({ month, points, title, testID }) => {
  const formatPoints = new Intl.NumberFormat('en-US').format(points);
  return (
    <View style={styles.sectionContainer} testID={testID}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <Text style={styles.month}>{month}</Text>
        <Text style={styles.points}>{`${formatPoints} pts`}</Text>
      </View>
    </View>
  );
};

Points.defaultProps = defaultProps;

export default Points;
