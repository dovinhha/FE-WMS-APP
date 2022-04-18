import {StyleSheet} from 'react-native';
import constants from '../../constants';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingBottom: 16,
  },
  containerScrollView: {
    flex: 1,
    padding: 16,
  },
  viewItems: {},
  item: {
    marginVertical: 5,
  },
  viewItem: {
    backgroundColor: '#fff',
    paddingVertical: 32,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  txtLabel: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
    color: constants.colors.bluePopular,
  },
  txtTitle: {
    textTransform: 'uppercase',
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 32,
    backgroundColor: constants.colors.bluePopular,
    color: constants.colors.whitePopular,
  },
});
