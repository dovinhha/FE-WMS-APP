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
    marginTop: -100,
  },
  viewItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 4,
    backgroundColor: constants.colors.whitePopular,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  txtLabel: {
    color: constants.colors.textPopular,
    textAlign: 'center',
    marginTop: 16,
    fontSize: 17,
    fontWeight: '600',
  },
  viewItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    height: windowHeight * 0.3,
    backgroundColor: constants.colors.bluePopular,
    width: windowWidth,
    padding: 20,
    flexDirection: 'row',
  },
  headerLeft: {
    // display: 'flex',
    // flexDirection: ""
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
  txtWelcome: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '500',
  },
  txtCurrentDate: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    marginTop: 8,
  },
  btnAccountInfo: {
    marginBottom: 10,
  },
  btnLogout: {},
});
