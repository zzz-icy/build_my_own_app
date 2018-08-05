import { fromJS } from 'immutable';
import addNewNotePageReducer from '../reducer';

describe('addNewNotePageReducer', () => {
  it('returns the initial state', () => {
    expect(addNewNotePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
