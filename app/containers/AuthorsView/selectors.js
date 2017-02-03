import {createSelector} from 'reselect';
import {makeSelectAuthors} from '../App/selectors'

const selectAuthorsView = (state) => state.get('authorsView');

const makeSelectCurrentAuthor = () => createSelector(
  selectAuthorsView,
  makeSelectAuthors(),
  (authorsViewState, selectAuthors) => {
    if(!selectAuthors) return null;
    let result = selectAuthors.filter((author) => authorsViewState.get('currentAuthorId') === author.name);
    return (result.length !== -1) ? result[0]: null;
  }
);

export {
  makeSelectCurrentAuthor
}
