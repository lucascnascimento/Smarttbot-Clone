import reducer from './reducer';
import * as actions from './actions';
import { initialState } from './mockData';

describe('ui reducer', () => {
  it('should toggle the boolean value of the mode property', () => {
    expect(reducer(undefined, actions.toggleMode())).toEqual({
      ...initialState,
      mode: true,
    });
  });
});
