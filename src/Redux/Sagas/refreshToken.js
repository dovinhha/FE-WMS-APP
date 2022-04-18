import axios from 'axios';
import {BASE_URL} from '../../Services/ServiceURL';
import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../../constants';
async function refreshToken() {
  const url = BASE_URL + '/auth/refresh-tokens';
  const refreshToken = await AsyncStorage.getItem(
    constants.storageKeys.refreshToken,
  );
  const res = await axios
    .post(url, {
      refreshToken: refreshToken,
    })
    .catch(err => {
      // window.history.pushState('', '', '/auth/login');
      // window.location.reload(false);
    });
  AsyncStorage.setItem(
    constants.storageKeys.refreshToken,
    res.data.refresh.token,
  );
  AsyncStorage.setItem(
    constants.storageKeys.expiresAt,
    JSON.stringify(res.data.access.expires),
  );
  window.location.reload(false);
  return res.data.access.token;
}

export default refreshToken;
