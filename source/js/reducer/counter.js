import { INCREMENT_COUNTER, DECREMENT_COUNTER, RECEIVE_COUNTERS } from '../action/counter';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
};

const inc = i => { return i + 1; };
const dec = i => { return i - 1; };

export default function countersByUser(state = initialState, action) {

  switch (action.type) {

  // TODO - this reducer needs more work to look like the reddit eg. -> REQUEST, INVALIDATE, SUCCESS, FAILURE
  // - An action informing the reducers that the request began.
  // - An action informing the reducers that the request finished successfully.
  // - An action informing the reducers that the request failed.

  case 'INCREMENT_COUNTER':

    // TODO - don't we already have access to the userId here -> action.user

    return Object.assign({}, state, {
      items: [
        ...state.items.slice(0, action.index),
        Object.assign({}, state.items[action.index], {
          value: inc(state.items[action.index].value)
        }),
        ...state.items.slice(action.index + 1)
      ]
    });

  case 'DECREMENT_COUNTER':
    return Object.assign({}, state, {
      items: [
        ...state.items.slice(0, action.index),
        Object.assign({}, state.items[action.index], {
          value: dec(state.items[action.index].value)
        }),
        ...state.items.slice(action.index + 1)
      ]
    });

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
