import {SET_CURRENT_AUTHOR} from './constants';
import {LOAD_AUTHOR,
  LOAD_AUTHOR_SUCCESS,
  LOAD_AUTHOR_ERROR} from './constants';

/**
 * Load the authors, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_AUTHORS
 */
export function loadAuthor(_id, language) {
  return {
    type: LOAD_AUTHOR,
    _id,
    language
  };
}

/**
 * Dispatched when the authors are loaded by the request saga
 *
 * @param  {array} authors The authorsitory data
 *
 * @return {object}      An action object with a type of LOAD_AUTHORS_SUCCESS passing the authors
 */
export function authorLoaded(author) {
  return {
    type: LOAD_AUTHOR_SUCCESS,
    author
  };
}

/**
 * Dispatched when loading the authors fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_AUTHORS_ERROR passing the error
 */
export function authorLoadingError(error) {
  return {
    type: LOAD_AUTHOR_ERROR,
    error,
  };
}

export function setCurrentAuthor(currentAuthorId){
  return {
    type: SET_CURRENT_AUTHOR,
    currentAuthorId
  }
}
