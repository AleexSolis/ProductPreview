import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 11,
    justifyContent: 'flex-start',
    width: '100%',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  textContainer: {
    justifyContent: 'space-around',
  },
  productName: {
    fontWeight: '800',
    fontSize: 14,
  },
  productDate: {
    fontWeight: '400',
    fontSize: 12,
  },
  rightContainer: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  pointsContainer: {
    flexDirection: 'row',
  },
  symbol: {
    fontWeight: '800',
    fontSize: 16,
  },
  points: {
    fontWeight: '800',
    fontSize: 16,
  },
  icon: {
    paddingLeft: 23,
  },
});

export default styles;
