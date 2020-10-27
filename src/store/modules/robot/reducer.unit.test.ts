import reducer from './reducer';
import * as actions from './actions';
import * as types from './types';
import { initialState, robotList, defaultResponse } from './mockData';

describe('robot instances reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as types.RobotListActionTypes)).toEqual(
      initialState
    );
  });

  it('should handle fetch robot list request', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_ROBOT_LIST_REQUEST,
      })
    ).toEqual({ ...initialState, loadingRobotList: true });
  });

  it('should handle fetch robot list sucess', () => {
    expect(
      reducer(undefined, actions.fetchRobotListSuccess(robotList))
    ).toEqual({
      ...initialState,
      robots: robotList,
      loadingRobotList: false,
    });
  });

  it('should handle fetch robot list failure', () => {
    expect(
      reducer(undefined, actions.fetchRobotListFailure(defaultResponse))
    ).toEqual({
      ...initialState,
      loadingRobotList: false,
      error: defaultResponse,
    });
  });
});
