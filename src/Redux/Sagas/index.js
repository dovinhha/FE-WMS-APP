import {all, fork} from 'redux-saga/effects';

import accountSaga from './accountSaga';

export function* rootSagas() {
  yield all([fork(accountSaga)]);
}
export default rootSagas;
