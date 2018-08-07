/*
 *
 * NotesPage reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_NOTES, LOAD_NOTES_SUCCESS, LOAD_NOTES_ERROR } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  notes: null,
});

function notesPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_NOTES:
      return state.set('loading', true).set('error', false);
    case LOAD_NOTES_SUCCESS:
      console.log(action.notes);
      return state.set('notes', action.notes).set('loading', false);
    case LOAD_NOTES_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default notesPageReducer;
