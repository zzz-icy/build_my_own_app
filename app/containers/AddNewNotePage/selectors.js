import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addNewNotePage state domain
 */

const selectAddNewNotePageDomain = state =>
  state.get('addNewNotePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddNewNotePage
 */

const makeSelectAddNewNotePage = () =>
  createSelector(selectAddNewNotePageDomain, substate => substate.toJS());

export default makeSelectAddNewNotePage;
export { selectAddNewNotePageDomain };
