import 'whatwg-fetch';

// export const CREATE_USER = 'CREATE_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
// export const UPDATE_USER = 'UPDATE_USER';
// export const DELETE_USER = 'DELETE_USER';

//
// export function createUser() {
//   return {
//     type: CREATE_USER
//   };
// }

export function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    user,
    receivedAt: Date.now()
  };
}

// export function updateUser() {
//   return {
//     type: UPDATE_USER
//   };
// }

// export function deleteUser() {
//   return {
//     type: DELETE_USER
//   };
// }

export function fetchUser(id) {

  return (dispatch, getState) => {
    return fetch('../data/database.json')
      .then(req => req.json())
      .then(json => json.users[id])
      .then(user => dispatch(receiveUser(user)));
  }
}
