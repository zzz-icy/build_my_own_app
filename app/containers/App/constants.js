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

// export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
// export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
// export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';

export const FETCH_USER = 'heroku-react-boilerplate/App/FETCH_USER';
/* eslint-disable indent */
// prettier-ignore
export const FETCH_USER_SUCCESS = 'heroku-react-boilerplate/App/FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'heroku-react-boilerplate/App/FETCH_USER_ERROR';
