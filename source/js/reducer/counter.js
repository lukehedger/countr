// import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../action/counter';
import { RECEIVE_COUNTERS } from '../action/counter';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
};

export default function countersByUser(state = initialState, action) {

  switch (action.type) {

  // TODO - this reducer needs more work to look like the reddit eg. -> REQUEST, INVALIDATE, SUCCESS, FAILURE
  // - An action informing the reducers that the request began.
  // - An action informing the reducers that the request finished successfully.
  // - An action informing the reducers that the request failed.

  // case 'INCREMENT_COUNTER':
  //   return state + 1;
  // case 'DECREMENT_COUNTER':
  //   return state - 1;

  case 'RECEIVE_COUNTERS':
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.counters,
      lastUpdated: action.receivedAt
    });
  default:
    return state;
  }

}
