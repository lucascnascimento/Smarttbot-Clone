import { ServerErrorResponse, RobotInstance } from '../../../types/types';
import * as actions from './actions';
import * as types from './types';
import { robotList } from './mockData';

// Robot overview success response data
const robotListData: Array<RobotInstance> = robotList;

// Robot overview failure response data
const defaultResponse: ServerErrorResponse = {
  message: 'FAILURE',
  status: 400,
};

describe('actions', () => {
  it('should create a robot list request action', () => {
    const expectedAction = {
      type: types.FETCH_ROBOT_LIST_REQUEST,
    };
    expect(actions.fetchRobotListRequest()).toEqual(expectedAction);
  });

  it('should create a robot list sucess action', () => {
    const expectedAction = {
      type: types.FETCH_ROBOT_LIST_SUCCESS,
      payload: robotListData,
    };
    expect(actions.fetchRobotListSuccess(robotListData)).toEqual(
      expectedAction
    );
  });

  it('should create a robot list failure action', () => {
    const expectedAction = {
      type: types.FETCH_ROBOT_LIST_FAILURE,
      payload: defaultResponse,
    };
    expect(actions.fetchRobotListFailure(defaultResponse)).toEqual(
      expectedAction
    );
  });

  it('should create a refresh robot list request action', () => {
    const expectedAction = {
      type: types.REFRESH_ROBOT_LIST_REQUEST,
    };
    expect(actions.refreshRobotListRequest()).toEqual(expectedAction);
  });

  it('should create a refresh robot list sucess action', () => {
    const expectedAction = {
      type: types.REFRESH_ROBOT_LIST_SUCCESS,
      payload: robotListData,
    };
    expect(actions.refreshRobotListSuccess(robotListData)).toEqual(
      expectedAction
    );
  });

  it('should create a refresh robot list failure action', () => {
    const expectedAction = {
      type: types.REFRESH_ROBOT_LIST_FAILURE,
      payload: defaultResponse,
    };
    expect(actions.refreshRobotListFailure(defaultResponse)).toEqual(
      expectedAction
    );
  });
});
