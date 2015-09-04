import 'whatwg-fetch';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
// export const CREATE_COUNTER = 'CREATE_COUNTER';
export const INVALIDATE_COUNTERS = 'INVALIDATE_COUNTERS';
export const REQUEST_COUNTERS = 'REQUEST_COUNTERS';
export const REQUEST_COUNTERS_FAILURE = 'REQUEST_COUNTERS_FAILURE';
export const RECEIVE_COUNTERS = 'RECEIVE_COUNTERS';
// export const DELETE_COUNTER = 'DELETE_COUNTER';

export function increment(index) {
  return {
    type: INCREMENT_COUNTER,
    index
  };
}

export function decrement(index) {
  return {
    type: DECREMENT_COUNTER,
    index
  };
}

// export function createCounter() {
//   return {
//     type: CREATE_COUNTER
//   };
// }

export function invalidateCounters(user) {
  return {
    type: INVALIDATE_COUNTERS,
    user
  };
}

export function requestCounters(user) {
  return {
    type: REQUEST_COUNTERS,
    user
  };
}

export function requestCountersFailure(user, error) {
  return {
    type: REQUEST_COUNTERS_FAILURE,
    user,
    error
  };
}

export function receiveCounters(user, counters) {
  return {
    type: RECEIVE_COUNTERS,
    user,
    counters: counters,
    receivedAt: Date.now()
  };
}

// export function deleteCounter() {
//   return {
//     type: DELETE_COUNTER
//   };
// }

function fetchCounters(user) {
  // thunk! function that returns a functions
  return (dispatch, getState) => {
    return fetch('../data/database.json')
      .then(req => req.json())
      .then(json => json.counters.filter(counter => { return counter.owner === user }))
      .then(counters => dispatch(receiveCounters(user, counters)));
  }
}

function shouldFetchPosts(state, user) {
  const counters = state.countersByUser;
  if (counters.status !== 'ok') {
    return true;
  } else if (counters.isFetching) {
    return false;
  } else {
    return counters.didInvalidate;
  }
}

export function fetchCountersIfNeeded(user) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), user)) {
      return dispatch(fetchCounters(user));
    } else {
      return Promise.resolve();
    }
  };
}
