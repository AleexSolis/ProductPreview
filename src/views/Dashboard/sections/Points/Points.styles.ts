import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: 20,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#334FFA',
    borderRadius: 20,
    flexDirection: 'column',
    marginLeft: 53,
    marginRight: 54,
    marginVertical: 20,
    paddingBottom: 49,
    paddingTop: 21,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  month: {
    alignSelf: 'flex-start',
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
    paddingLeft: 19,
  },
  points: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800',
    paddingTop: 7,
  },
  title: {
    color: '#9B9898',
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
});

export default styles;
