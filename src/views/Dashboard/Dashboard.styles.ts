import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    flexDirection: 'column',
  },
  message: {
    fontWeight: '800',
    fontSize: 20,
  },
  user: {
    fontWeight: '400',
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    paddingBottom: 43,
    paddingTop: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 13,
  },
  button: {
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 12,
    lineHeight: 16,
    color: '#FFFFFF',
  },
});

export default styles;
