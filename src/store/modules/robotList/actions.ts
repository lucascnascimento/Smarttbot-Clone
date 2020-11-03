import { ServerErrorResponse, RobotInstance } from '../../../types/types';
import {
  FETCH_ROBOT_LIST_REQUEST,
  FETCH_ROBOT_LIST_SUCCESS,
  FETCH_ROBOT_LIST_FAILURE,
  REFRESH_ROBOT_LIST_REQUEST,
  REFRESH_ROBOT_LIST_SUCCESS,
  REFRESH_ROBOT_LIST_FAILURE,
  RobotListActionTypes,
} from './types';

export function fetchRobotListRequest(): RobotListActionTypes {
  return {
    type: FETCH_ROBOT_LIST_REQUEST,
  };
}

export function fetchRobotListSuccess(
  robotList: Array<RobotInstance>
): RobotListActionTypes {
  return {
    type: FETCH_ROBOT_LIST_SUCCESS,
    payload: robotList,
  };
}

export function fetchRobotListFailure(
  error: ServerErrorResponse
): RobotListActionTypes {
  return {
    type: FETCH_ROBOT_LIST_FAILURE,
    payload: error,
  };
}

export function refreshRobotListRequest(): RobotListActionTypes {
  return {
    type: REFRESH_ROBOT_LIST_REQUEST,
  };
}

export function refreshRobotListSuccess(
  robotList: Array<RobotInstance>
): RobotListActionTypes {
  return {
    type: REFRESH_ROBOT_LIST_SUCCESS,
    payload: robotList,
  };
}

export function refreshRobotListFailure(
  error: ServerErrorResponse
): RobotListActionTypes {
  return {
    type: REFRESH_ROBOT_LIST_FAILURE,
    payload: error,
  };
}
