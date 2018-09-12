import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the indecisionAppPage state domain
 */

const selectIndecisionAppPageDomain = state =>
  state.get('indecisionAppPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by IndecisionAppPage
 */

const makeSelectIndecisionAppPage = () =>
  createSelector(selectIndecisionAppPageDomain, substate => substate.toJS());

export default makeSelectIndecisionAppPage;
export { selectIndecisionAppPageDomain };
