import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingBottom: 20,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 8,
  }
});

export default styles;
