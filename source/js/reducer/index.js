import { combineReducers } from 'redux';
import countersByUser from './counter';
import user from './user';

const rootReducer = combineReducers({
  countersByUser,
  user
});

export default rootReducer;
