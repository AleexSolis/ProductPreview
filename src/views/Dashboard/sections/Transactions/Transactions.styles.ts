import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingBottom: 43,
    paddingTop: 20,
  },
  title: {
    color: '#9B9898',
    fontSize: 14,
    fontWeight: '800',
    paddingBottom: 20,
    textTransform: 'uppercase',
  },
  cardsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
  },
  scrollContainer: {
    marginBottom: 20,
    marginTop: 23,
    paddingHorizontal: 15,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  empty: {
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default styles;
