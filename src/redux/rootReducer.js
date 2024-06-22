import { combineReducers } from 'redux';
import { authReducer } from './auth/slice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
