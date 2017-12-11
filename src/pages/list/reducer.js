import { CHANGE_LIST } from './actionTypes';

const defaultState = {
  list: []
}

export  default (state = defaultState, action) => {
  console.log(action)
  if(action.type === CHANGE_LIST) {
    return {
      list: action.value
    }
  }
  return state;
}