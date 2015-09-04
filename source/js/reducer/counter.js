import { INCREMENT_COUNTER, DECREMENT_COUNTER, INVALIDATE_COUNTERS, REQUEST_COUNTERS, REQUEST_COUNTERS_FAILURE, RECEIVE_COUNTERS } from '../action/counter';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  status: null,
  errorMessage: null,
  items: []
};

const inc = i => { return i + 1; };
const dec = i => { return i - 1; };

export default function countersByUser(state = initialState, action) {

  switch (action.type) {

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

  case 'INVALIDATE_COUNTERS':
    return Object.assign({}, state, {
      didInvalidate: true
    });

  case 'REQUEST_COUNTERS':
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false,
      status: null
    });

  case 'REQUEST_COUNTERS_FAILURE':
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      status: 'error',
      errorMessage: action.error
    });

  case 'RECEIVE_COUNTERS':
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.counters,
      lastUpdated: action.receivedAt,
      status: 'ok'
    });

  default:
    return state;
  }

}
