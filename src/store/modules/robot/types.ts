import { DefaultResponse, RobotInstance } from '../../../types/types';

// State type definition

export interface RobotListState {
  loadingRobotList: boolean;
  robots: Array<RobotInstance>;
  error: DefaultResponse;
}

// Actions type definition

export const FETCH_ROBOT_LIST_REQUEST = 'FETCH_ROBOT_LIST_REQUEST';
export const FETCH_ROBOT_LIST_SUCCESS = 'FETCH_ROBOT_LIST_SUCCESS';
export const FETCH_ROBOT_LIST_FAILURE = 'FETCH_ROBOT_LIST_FAILURE';

interface FetchRobotListRequest {
  type: typeof FETCH_ROBOT_LIST_REQUEST;
}

interface FetchRobotListSuccess {
  type: typeof FETCH_ROBOT_LIST_SUCCESS;
  payload: Array<RobotInstance>;
}

interface FetchRobotListFailure {
  type: typeof FETCH_ROBOT_LIST_FAILURE;
  payload: DefaultResponse;
}

export type RobotListActionTypes =
  | FetchRobotListRequest
  | FetchRobotListSuccess
  | FetchRobotListFailure;
