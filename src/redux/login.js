import { createStore } from 'redux';

function restore() {
  var user = {};
  try {
    user = JSON.parse(sessionStorage.getItem('redux.user'));
  } catch (e) {
    // Ignore parsing error
  }
  return user;
}

function backup(user) {
  if (user) {
    sessionStorage.setItem('redux.user', JSON.stringify(user));
  } else {
    sessionStorage.setItem('redux.user', null);
  }
}

const loginReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      backup(action.user);
      return action.user;
    case 'LOGOUT':
      backup({});
      return {};
    default:
      return restore();
  }
};

export default createStore(loginReducer);