import { DefaultResponse, RobotOverview } from '../../../types/types';

// State type definition

export interface RobotOverviewState {
  loadingRobotOverview: boolean;
  robotOverview: RobotOverview;
  error: DefaultResponse;
}

// Actions type definition

export const FETCH_ROBOT_OVERVIEW_REQUEST = 'FETCH_ROBOT_OVERVIEW_REQUEST';
export const FETCH_ROBOT_OVERVIEW_SUCCESS = 'FETCH_ROBOT_OVERVIEW_SUCCESS';
export const FETCH_ROBOT_OVERVIEW_FAILURE = 'FETCH_ROBOT_OVERVIEW_FAILURE';

interface FetchRobotOverviewRequest {
  type: typeof FETCH_ROBOT_OVERVIEW_REQUEST;
}

interface FetchRobotOverviewSuccess {
  type: typeof FETCH_ROBOT_OVERVIEW_SUCCESS;
  payload: RobotOverview;
}

interface FetchRobotOverviewFailure {
  type: typeof FETCH_ROBOT_OVERVIEW_FAILURE;
  payload: DefaultResponse;
}

export type RobotOverviewActionTypes =
  | FetchRobotOverviewRequest
  | FetchRobotOverviewSuccess
  | FetchRobotOverviewFailure;
