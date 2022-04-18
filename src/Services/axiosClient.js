import axios from 'axios';
import queryString from 'query-string';
// import refreshToken from '../Redux/Sagas/refreshToken';
import {BASE_URL} from './ServiceURL';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../constants';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  paramsSerializer: params => queryString.stringify(params, {sort: false}),
});

axiosClient.interceptors.request.use(
  async config => {
    let token = await AsyncStorage.getItem(constants.storageKeys.token);
    config.headers.authorization = `Bearer ${token}`;
    const expiresAt = await AsyncStorage.getItem(
      constants.storageKeys.expiresAt,
    );
    if (!_.isEmpty(expiresAt)) {
      const expireAt = new Date(JSON.parse(expiresAt));
      if (token && !_.isEmpty(token)) {
        if (
          new Date().getTime() > expireAt.getTime() - 10 * 60 * 1000 &&
          expiresAt !== null
        ) {
          // const data = refreshToken();
          // token = typeof data === 'string' ? data : await data;
        }
      }
      // setting updated token
      // AsyncStorage.setItem(constants.storageKeys.token, token);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

const axiosClientPdf = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  paramsSerializer: params => queryString.stringify(params),
});

axiosClientPdf.interceptors.request.use(
  async config => {
    // config.headers.authorization = `Bearer ${AsyncStorage.getItem('token')}`;
    // const expireAt = new Date(AsyncStorage.getItem('expiresAt'));
    // let token = AsyncStorage.getItem('token');
    // if (token && !_.isEmpty(token))
    //   if (new Date().getTime() > expireAt.getTime()) {
    //     const data = refreshToken();
    //     token = typeof data === 'string' ? data : await data;
    //   }
    // // setting updated token
    // AsyncStorage.setItem('token', token);
    // config.responseType = 'blob';
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// export default {axiosClient, axiosClientPdf};
export {axiosClient, axiosClientPdf};
