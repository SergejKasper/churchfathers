import {SET_CURRENT_AUTHOR} from './constants';

export function setCurrentAuthor(currentAuthorId){
  return {
    type: SET_CURRENT_AUTHOR,
    currentAuthorId
  }
}
