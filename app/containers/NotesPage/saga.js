import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_NOTES } from 'containers/NotesPage/constants';
import { loadNotes, notesLoadingError } from 'containers/NotesPage/actions';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';
// Individual exports for testing

export function* getNotes() {
  // Select username from store
  // const requestURL = 'http://localhost:3001/notes';
  const requestURL = '/api/notes';

  console.log('saga');
  try {
    // Call our request helper (see 'utils/request')
    const notes = yield call(request, requestURL);
    console.log(notes);
    yield put(loadNotes(notes));
  } catch (err) {
    yield put(notesLoadingError(err));
  }
}

export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_NOTES, getNotes);
}
