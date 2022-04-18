import {StyleSheet} from 'react-native';
import constants from '../../constants';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  containerScrollView: {
    flex: 1,
    padding: 16,
  },
  viewItems: {},
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
});
