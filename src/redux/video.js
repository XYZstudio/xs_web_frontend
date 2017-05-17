import { createStore } from 'redux';

const videoReducer = (state = {}, action) => {
  switch(action.type) {
    case 'PLAY':
      return {
      	description: action.description,
      	videoName: action.videoName
      };
    default:
      return '';
  }
};

export default createStore(videoReducer);