import reducer from './reducer';
import * as actions from './actions';
import * as types from './types';
import { initialState, overviewData, defaultResponse } from './mockData';

describe('robot overview reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as types.RobotOverviewActionTypes)).toEqual(
      initialState
    );
  });

  it('should handle fetch robot overview request', () => {
    expect(reducer(undefined, actions.fetchRobotOverviewRequest())).toEqual({
      ...initialState,
      loadingRobotOverview: true,
    });
  });

  it('should handle fetch robot overview sucess', () => {
    expect(
      reducer(undefined, actions.fetchRobotOverviewSuccess(overviewData))
    ).toEqual({
      ...initialState,
      robotOverview: overviewData,
      loadingRobotOverview: false,
    });
  });

  it('should handle fetch robot ovewrview failure', () => {
    expect(
      reducer(undefined, actions.fetchRobotOverviewFailure(defaultResponse))
    ).toEqual({
      ...initialState,
      loadingRobotOverview: false,
      error: defaultResponse,
    });
  });
});
