import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 40,
  },
  imageContainer: {
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOpacity: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
  },
  textContainer: {
    flex: 1,
    paddingVertical: 32,
  },
  subTitles: {
    color: '#9B9898',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19,
    paddingBottom: 19,
  },
  date: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 22,
    paddingBottom: 20,
  },
  points: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 33,
    paddingTop: 19,
  },
  buttonContainer: {
    height: 50,
  },
  buttonText: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF'
  },
});

export default styles;
