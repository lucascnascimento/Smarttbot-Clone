import { DefaultResponse, RobotInstance } from '../../../types/types';
import * as actions from './actions';
import * as types from './types';
import { robotList } from './mockData';

// Robot overview success response data
const robotListData: Array<RobotInstance> = robotList;

// Robot overview failure response data
const defaultResponse: DefaultResponse = {
  message: 'FAILURE',
  data: {},
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
});
