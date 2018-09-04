/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import { FETCH_USER, FETCH_USER_ERROR, FETCH_USER_SUCCESS } from './constants';

// The initial state of the App
// const initialState = fromJS({
//   loading: false,
//   error: false,
//   currentUser: false,
//   userData: {
//     repositories: false,
//   },
// });

const initialState = fromJS({
  fetching: false,
  error: false,
  auth: null,
});

// function appReducer(state = initialState, action) {
//   switch (action.type) {
//     case LOAD_REPOS:
//       return state
//         .set('loading', true)
//         .set('error', false)
//         .setIn(['userData', 'repositories'], false);
//     case LOAD_REPOS_SUCCESS:
//       return state
//         .setIn(['userData', 'repositories'], action.repos)
//         .set('loading', false)
//         .set('currentUser', action.username);
//     case LOAD_REPOS_ERROR:
//       return state.set('error', action.error).set('loading', false);
//     default:
//       return state;
//   }
// }
/* eslint-disable indent */
// prettier-ignore
function authReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return state.set('fetching', true)
        .set('error', false);
    // .set('auth', null);
    case FETCH_USER_SUCCESS:
      // console.log(action);
      return state.set('auth', !!action.userData || false)
        .set('fetching', false);
    case FETCH_USER_ERROR:
      return state.set('error', action.err)
        .set('fetching', false);

    default:
      return state;
  }
}

export default authReducer;
