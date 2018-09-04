/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectUserData = () =>
  createSelector(selectGlobal, globalState => globalState.get('auth'));

const makeSelectFetching = () =>
  createSelector(selectGlobal, globalState => globalState.get('fetching'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

// const makeSelectRepos = () =>
//   createSelector(selectGlobal, globalState =>
//     globalState.getIn(['userData', 'repositories']),
//   );

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  selectGlobal,
  makeSelectUserData,
  makeSelectFetching,
  makeSelectError,
  // makeSelectRepos,
  makeSelectLocation,
};
