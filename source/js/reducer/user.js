import { RECEIVE_USER } from '../action/user';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  data: {}
};

export default function user(state = initialState, action) {

  switch (action.type) {

  case 'RECEIVE_USER':
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      data: action.user,
      lastUpdated: action.receivedAt
    });

  default:
    return state;

  }

}
