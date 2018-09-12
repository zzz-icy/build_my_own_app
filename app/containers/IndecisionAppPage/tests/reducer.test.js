import { fromJS } from 'immutable';
import indecisionAppPageReducer from '../reducer';

describe('indecisionAppPageReducer', () => {
  it('returns the initial state', () => {
    expect(indecisionAppPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
