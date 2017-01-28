/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_AUTHORS,
  LOAD_AUTHORS_SUCCESS,
  LOAD_AUTHORS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  cmsData: {
    authors: false,
    works: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_AUTHORS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['cmsData', 'authors'], false);
    case LOAD_AUTHORS_SUCCESS:
      return state
        .setIn(['cmsData', 'authors'], action.authors)
        .set('loading', false)
    case LOAD_AUTHORS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
