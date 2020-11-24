import reducer from './reducer';
import * as actions from './actions';
import { initialState } from './mockData';

describe('UI reducer', () => {
  it('should toggle the boolean value of the mode property', () => {
    expect(reducer(undefined, actions.toggleMode())).toEqual({
      ...initialState,
      mode: true,
    });
  });

  it('should set the action of openning the sidebar to true', () => {
    expect(reducer(undefined, actions.openSidebar())).toEqual({
      ...initialState,
      sidebar: true,
    });
  });

  it('should set the action of openning the sidebar to false', () => {
    expect(reducer(undefined, actions.closeSidebar())).toEqual({
      ...initialState,
      sidebar: false,
    });
  });
});
