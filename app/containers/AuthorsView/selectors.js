import {createSelector} from 'reselect';
import {makeSelectAuthors} from '../app/selectors'

const selectAuthorsView = (state) => state.get('authorsView');

const makeSelectCurrentAuthor = () => createSelector(
  selectAuthorsView,
  makeSelectAuthors(),
  (authorsViewState, selectAuthors) => {
    if(!selectAuthors) return "";
    return selectAuthors.filter((author) => authorsViewState.get('currentAuthorId') === author._id);
  }
);

export {
  makeSelectCurrentAuthor
}
