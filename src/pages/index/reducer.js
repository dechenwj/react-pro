import { CHANGE_INDEX } from './actionTypes';

const defaultState = {
    list: [],
    blogroll: []
}

export default (state = defaultState, action) => {
  
  if(action.type === CHANGE_INDEX) {
    const newState = Object.assign({}, state); 
    newState.blogroll = action.blogroll;    
    newState.list = action.list;
    return newState;
  }
  return state;
}