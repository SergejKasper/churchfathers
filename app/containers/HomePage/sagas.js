import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_AUTHORS } from 'containers/App/constants';
import { authorsLoaded, authorsLoadingError } from 'containers/App/actions';
import {DEFAULT_LOCALE} from 'containers/App/constants'
import request from 'utils/request';
import appLocales from '../../i18n';
// Individual exports for testing
export function* defaultSaga() {
  const watcher = yield takeLatest(LOAD_AUTHORS, getAuthors);
    // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* getAuthors(action){
  let requestDetails = 'name,description';
  if(action.language !== DEFAULT_LOCALE) requestDetails = 'info_' + action.language + '{description,name}';
  const requestURL = 'http://localhost:3000/graphql?query={author_find{_id,' + requestDetails + ',image,birthDate,deathDate}}';
  try {
    const result = yield call(request, requestURL);
    // Replace the language specific default properties with info_lang.
    let applyAuthors = function(){
      let authors = result.data.author_find;
      authors = (action.language === DEFAULT_LOCALE) ? authors : authors.map(o => Object.assign(o, o['info_' + action.language]));
      console.log(authors)
      return authors;
    }
    yield put(authorsLoaded(applyAuthors()));
  } catch (err) {
    console.log(err)
    yield put(authorsLoadingError(err));
  }
}


// All sagas to be loaded
export default [
  defaultSaga,
];
