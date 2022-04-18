import {combineReducers} from 'redux';
import accountReducer from './accountReducer';

const rootReducers = combineReducers({
  accountReducer,
});
export default rootReducers;
