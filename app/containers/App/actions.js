import {
  LOAD_AUTHORS,
  LOAD_AUTHORS_SUCCESS,
  LOAD_AUTHORS_ERROR,
} from './constants';

/**
 * Load the authors, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_AUTHORS
 */
export function loadAuthors() {
  return {
    type: LOAD_AUTHORS,
  };
}

/**
 * Dispatched when the authors are loaded by the request saga
 *
 * @param  {array} authors The authorsitory data
 *
 * @return {object}      An action object with a type of LOAD_AUTHORS_SUCCESS passing the authors
 */
export function authorsLoaded(authors) {
  return {
    type: LOAD_AUTHORS_SUCCESS,
    authors
  };
}

/**
 * Dispatched when loading the authors fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_AUTHORS_ERROR passing the error
 */
export function authorsLoadingError(error) {
  return {
    type: LOAD_AUTHORS_ERROR,
    error,
  };
}
