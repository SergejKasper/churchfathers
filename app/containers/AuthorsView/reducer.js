import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import {SET_CURRENT_AUTHOR} from './constants';
import {LOAD_AUTHORS_SUCCESS} from '../App/constants';

const initialState = fromJS({
  currentAuthorId: null
});

function authorsViewReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_AUTHOR:
      return state.set('currentAuthorId', action.currentAuthorId)
    case LOCATION_CHANGE:
      return state.set('currentAuthorId', (action.payload.pathname).replace('/authors/', '').split("-").join(" "));
    case LOAD_AUTHORS_SUCCESS:
        return state.set('currentAuthorId', action.currentAuthorId);
    default:
      return state;
  }
}

export default authorsViewReducer;
