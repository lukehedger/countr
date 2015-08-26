export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const CREATE_COUNTER = 'CREATE_COUNTER';
export const DELETE_COUNTER = 'DELETE_COUNTER';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function createCounter() {
  return {
    type: CREATE_COUNTER
  };
}

export function deleteCounter() {
  return {
    type: DELETE_COUNTER
  };
}
