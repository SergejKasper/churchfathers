import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_AUTHOR } from 'containers/AuthorsView/constants';
import { authorLoaded, authorLoadingError } from 'containers/AuthorsView/actions';
import {DEFAULT_LOCALE} from 'containers/App/constants'
import request from 'utils/request';
import appLocales from '../../i18n';
// Individual exports for testing
export function* defaultSaga() {
  const watcher = yield takeLatest(LOAD_AUTHOR, getAuthor);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* getAuthor(action){
  let requestDetails = 'name,description';
  if(action.language !== DEFAULT_LOCALE) requestDetails = 'info_' + action.language + '{description,name}';
  const requestURL = 'http://localhost:3000/graphql?query={author_find(name:\"' + action._id + '\"){_id,' + requestDetails + ',image,birthDate,deathDate}}';
  try {
    const result = yield call(request, requestURL);
    // Replace the language specific default properties with info_lang.
    let applyAuthor = function(){
      let author = result.data.author_find[0];
      author = (action.language === DEFAULT_LOCALE) ? author : Object.assign(author, author['info_' + action.language]);
      console.log(author)
      return author;
    }
    yield put(authorLoaded(applyAuthor()));
  } catch (err) {
    console.log(err)
    yield put(authorLoadingError(err));
  }
}


// All sagas to be loaded
export default [
  defaultSaga,
];
