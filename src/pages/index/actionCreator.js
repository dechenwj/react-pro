import { CHANGE_INDEX } from './actionTypes';
export const getIndexAction = (list, blogroll) => ({
  type: CHANGE_INDEX,
  list: list,
  blogroll: blogroll
})
