import 'whatwg-fetch';

// export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
// export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
// export const CREATE_COUNTER = 'CREATE_COUNTER';
export const RECEIVE_COUNTERS = 'RECEIVE_COUNTERS';
// export const DELETE_COUNTER = 'DELETE_COUNTER';

// export function increment() {
//   return {
//     type: INCREMENT_COUNTER
//   };
// }
//
// export function decrement() {
//   return {
//     type: DECREMENT_COUNTER
//   };
// }
//
// export function createCounter() {
//   return {
//     type: CREATE_COUNTER
//   };
// }

export function receiveCounters(user, json) {
  return {
    type: RECEIVE_COUNTERS,
    user,
    counters: json.counters,
    receivedAt: Date.now()
  };
}

// export function deleteCounter() {
//   return {
//     type: DELETE_COUNTER
//   };
// }

// TODO - user here is used to fetchCounters for a specific user
export function fetchCounters(user) {
  // thunk! function that returns a functions
  return (dispatch, getState) => {
    return fetch('../data/database.json')
      .then(req => req.json())
      // .then(json => console.log(user, json));
      .then(json => dispatch(receiveCounters(user, json)));
  }
}
