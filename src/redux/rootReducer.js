import { combineReducers } from 'redux';
import { authReducer } from './auth/slice';
import usersReducer from './user/slice';
import waterReducer from './water/slice';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  water: waterReducer,
});

export default rootReducer;
