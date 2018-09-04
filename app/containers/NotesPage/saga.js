import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_NOTES } from 'containers/NotesPage/constants';
import { loadNotes, notesLoadingError } from 'containers/NotesPage/actions';

// Sagas are implemented through special functions called generator functions. These are a new feature of ES6 JavaScript. Basically, execution jumps in and out of a generator everywhere you see a yield statement. Think of a yield statement as causing the generator to pause and return the yielded value. Later on, the caller can resume the generator at the statement following the yield.

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

// 1. Application starts, and runs all of it’s existing Sagas.
// 2. defaultSaga runs,  is “sleeping” .
// 3. LOAD_NOTES action is dispatched.
// 4. Saga’s ‘thread’ is waking up and moves to getNotes, where it emits loadNotes for the reducer to handle (the reducer will now probably cause the view to show some loading indication).
// 5. We send a request to the server with call, and “sleep” until the promise is resolved with content that is stored in the ‘data’ variable.
// 6. ‘SHOW_DATA_ACTION’ is dispatched with the received data, so now the reducer can use it for updating the view.
