import * as actions from './actions';
import * as types from './types';

describe('UI actions', () => {
  it('should create a toggle mode action', () => {
    const expectedAction = {
      type: types.TOGGLE_MODE,
    };
    expect(actions.toggleMode()).toEqual(expectedAction);
  });

  it('should create a open sidebar action', () => {
    const expectedAction = {
      type: types.OPEN_SIDEBAR,
    };
    expect(actions.openSidebar()).toEqual(expectedAction);
  });

  it('should create a close sidebar action', () => {
    const expectedAction = {
      type: types.CLOSE_SIDEBAR,
    };
    expect(actions.closeSidebar()).toEqual(expectedAction);
  });
});
