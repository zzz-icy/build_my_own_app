import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the notesPage state domain
 */

const selectNotesPageDomain = state => state.get('notesPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NotesPage
 */

const makeSelectNotesPage = () =>
  createSelector(selectNotesPageDomain, substate => substate.toJS());

const makeSelectNotes = () =>
  createSelector(selectNotesPageDomain, substate => substate.get('notes'));
const makeSelectError = () =>
  createSelector(selectNotesPageDomain, substate => substate.get('error'));
const makeSelectLoading = () =>
  createSelector(selectNotesPageDomain, substate => substate.get('loading'));
// export default makeSelectNotesPage;
export {
  makeSelectNotesPage,
  makeSelectNotes,
  makeSelectError,
  makeSelectLoading,
};
