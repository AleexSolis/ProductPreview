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
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    marginVertical: 20,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  subTitles: {
    color: '#9B9898',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19,
    paddingBottom: 10,
  },
  date: {
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 22,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  points: {
    fontSize: 18,
    fontWeight: '800',
    paddingLeft: 10,
  },
  buttonContainer: {
    height: 50,
  },
  buttonText: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF',
  },
});

export default styles;
