import { createStore } from 'redux';

const videoReducer = (state = {}, action) => {
  switch(action.type) {
    case 'PLAY':
      return action.description;
    default:
      return '';
  }
};

export default createStore(videoReducer);