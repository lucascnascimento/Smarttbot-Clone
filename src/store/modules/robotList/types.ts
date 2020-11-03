import { RobotInstance, ServerErrorResponse } from '../../../types/types';

// State type definition

export interface RobotListState {
  loadingRobotList: boolean;
  robots: Array<RobotInstance>;
  error: ServerErrorResponse;
}

// Actions type definition

export const FETCH_ROBOT_LIST_REQUEST = 'FETCH_ROBOT_LIST_REQUEST';
export const FETCH_ROBOT_LIST_SUCCESS = 'FETCH_ROBOT_LIST_SUCCESS';
export const FETCH_ROBOT_LIST_FAILURE = 'FETCH_ROBOT_LIST_FAILURE';
export const REFRESH_ROBOT_LIST_REQUEST = 'REFRESH_ROBOT_LIST_REQUEST';
export const REFRESH_ROBOT_LIST_SUCCESS = 'REFRESH_ROBOT_LIST_SUCCESS';
export const REFRESH_ROBOT_LIST_FAILURE = 'REFRESH_ROBOT_LIST_FAILURE';

interface FetchRobotListRequest {
  type: typeof FETCH_ROBOT_LIST_REQUEST;
}

interface FetchRobotListSuccess {
  type: typeof FETCH_ROBOT_LIST_SUCCESS;
  payload: Array<RobotInstance>;
}

interface FetchRobotListFailure {
  type: typeof FETCH_ROBOT_LIST_FAILURE;
  payload: ServerErrorResponse;
}

interface RefreshRobotListRequest {
  type: typeof REFRESH_ROBOT_LIST_REQUEST;
}

interface RefreshRobotListSuccess {
  type: typeof REFRESH_ROBOT_LIST_SUCCESS;
  payload: Array<RobotInstance>;
}

interface RefreshRobotListFailure {
  type: typeof REFRESH_ROBOT_LIST_FAILURE;
  payload: ServerErrorResponse;
}

export type RobotListActionTypes =
  | FetchRobotListRequest
  | FetchRobotListSuccess
  | FetchRobotListFailure
  | RefreshRobotListRequest
  | RefreshRobotListSuccess
  | RefreshRobotListFailure;
