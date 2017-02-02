import { fromJS } from 'immutable';
import {SET_CURRENT_AUTHOR} from './constants';

const initialState = fromJS({
  currentAuthorId: null
});

function authorsViewReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_AUTHOR:
      return state.set('currentAuthorId', action.currentAuthorId)
    default:
      return state;
  }
}

export default authorsViewReducer;
