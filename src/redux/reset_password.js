import { createStore } from 'redux';

const resetPassword = (state = {}, action) => {
  switch(action.type) {
    case 'EMAIL':
      return action.payload;
    default:
      return action.payload;
  }
};

export default createStore(resetPassword);