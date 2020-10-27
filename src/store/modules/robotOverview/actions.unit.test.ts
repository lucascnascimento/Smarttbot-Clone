import * as actions from './actions';
import * as types from './types';
import { defaultResponse, overviewData } from './mockData';

describe('actions', () => {
  it('should create a robot overview request action', () => {
    const expectedAction = {
      type: types.FETCH_ROBOT_OVERVIEW_REQUEST,
    };
    expect(actions.fetchRobotOverviewRequest()).toEqual(expectedAction);
  });

  it('should create a robot overview sucess action', () => {
    const expectedAction = {
      type: types.FETCH_ROBOT_OVERVIEW_SUCCESS,
      payload: overviewData,
    };
    expect(actions.fetchRobotOverviewSuccess(overviewData)).toEqual(
      expectedAction
    );
  });

  it('should create a robot overview failure action', () => {
    const expectedAction = {
      type: types.FETCH_ROBOT_OVERVIEW_FAILURE,
      payload: defaultResponse,
    };
    expect(actions.fetchRobotOverviewFailure(defaultResponse)).toEqual(
      expectedAction
    );
  });
});
