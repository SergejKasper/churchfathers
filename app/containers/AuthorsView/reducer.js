import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import {SET_CURRENT_AUTHOR, LOAD_AUTHOR, LOAD_AUTHOR_SUCCESS, LOAD_AUTHOR_ERROR} from './constants';
import {LOAD_AUTHORS_SUCCESS} from '../App/constants';

const initialState = fromJS({
  currentAuthorId: null,
  loading: false,
  error: false,
  cmsData: {
    author: false
  }
});

function authorsViewReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_AUTHOR:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['cmsData', 'author'], false);
    case LOAD_AUTHOR_SUCCESS:
      return state
        .setIn(['cmsData', 'author'], action.author)
        .set('loading', false)
    case LOAD_AUTHOR_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
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
