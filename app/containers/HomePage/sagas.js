import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_AUTHORS } from 'containers/App/constants';
import { authorsLoaded, authorsLoadingError } from 'containers/App/actions';
import request from 'utils/request';

// Individual exports for testing
export function* defaultSaga() {
  const watcher = yield takeLatest(LOAD_AUTHORS, getAuthors);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* getAuthors(){
  const requestURL = `http://localhost:3000/graphql?query={author_find{_id,name,birthDate,deathDate}}`;
  try {
    // Call our request helper (see 'utils/request')
    const result = yield call(request, requestURL);
    yield put(authorsLoaded(result.data.author_find));
  } catch (err) {
    yield put(authorsLoadingError(err));
  }
}


// All sagas to be loaded
export default [
  defaultSaga,
];
