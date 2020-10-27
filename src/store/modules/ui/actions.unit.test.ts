import * as actions from './actions';
import * as types from './types';
import { initialState } from './mockData';

describe('actions', () => {
  it('should create a toggle mode action', () => {
    const expectedAction = {
      type: types.TOGGLE_MODE,
    };
    expect(actions.toggleMode()).toEqual(expectedAction);
  });
});
