import {createSelector} from 'reselect';
import {makeSelectAuthors} from '../App/selectors'

const selectAuthorsView = (state) => state.get('authorsView');

const makeSelectCurrentAuthor = () => createSelector(
  selectAuthorsView,
  makeSelectAuthors(),
  (authorsViewState, selectAuthors) => {
    if(!selectAuthors) return "";
    return selectAuthors.filter((author) => authorsViewState.get('currentAuthorId') === author.name);
  }
);

export {
  makeSelectCurrentAuthor
}
