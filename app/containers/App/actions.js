import {
  LOAD_AUTHORS,
  LOAD_AUTHORS_SUCCESS,
  LOAD_AUTHORS_ERROR,
  LOAD_WORKS,
  LOAD_WORKS_SUCCESS,
  LOAD_WORKS_ERROR,
} from './constants';

/**
 * Load the authors, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_AUTHORS
 */
export function loadWorks(language) {
  return {
    type: LOAD_WORKS, language
  };
}

/**
 * Dispatched when the authors are loaded by the request saga
 *
 * @param  {array} authors The authorsitory data
 *
 * @return {object}      An action object with a type of LOAD_AUTHORS_SUCCESS passing the authors
 */
export function worksLoaded(authors) {
  return {
    type: LOAD_WORKS_SUCCESS,
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
export function worksLoadingError(error) {
  return {
    type: LOAD_WORKS_ERROR,
    error,
  };
}

/**
 * Load the authors, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_AUTHORS
 */
export function loadAuthors(language) {
  return {
    type: LOAD_AUTHORS, language
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
