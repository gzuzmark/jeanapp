import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';
import alerts from './alerts';
import salesVisits from './sales';

export default combineReducers({
  alerts,
  auth,
  navigation,
  salesVisits,
});
