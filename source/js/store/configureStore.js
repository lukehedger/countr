import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducer';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore);

export default function configureStore(initialState = {}) {

  return createStoreWithMiddleware(rootReducer, initialState);

}
