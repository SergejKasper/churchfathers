/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TIMELINE_FILTER_CHANGE,
} from './constants';

const initialState = fromJS({});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case TIMELINE_FILTER_CHANGE:
      return state;
    default:
      return state;
  }
}

export default homePageReducer;
