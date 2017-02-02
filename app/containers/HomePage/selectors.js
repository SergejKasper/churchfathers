import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = () => (state) => state.get('homePage');
const selectAuthors = () => (state) => state.get('authors');

/**
 * Other specific selectors
 */

 const makeSelectCurrentObject = () => createSelector(
   selectAuthors(),
   (authors) => (authors) ? authors.filter((a, i) => i === 0 ) : {}
 );

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectCurrentObject
};
