/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const LOAD_AUTHORS = 'app/LOAD_AUTHORS';
export const LOAD_AUTHORS_SUCCESS = 'app/LOAD_AUTHORS_SUCCESS';
export const LOAD_AUTHORS_ERROR= 'app/LOAD_AUTHORS_ERROR';
export const LOAD_WORKS = 'app/LOAD_WORKS';
export const LOAD_WORKS_SUCCESS = 'app/LOAD_WORKS_SUCCESS';
export const LOAD_WORKS_ERROR= 'app/LOAD_WORKS_ERROR';
