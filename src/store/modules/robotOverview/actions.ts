import { DefaultResponse, RobotOverview } from '../../../types/types';
import {
  FETCH_ROBOT_OVERVIEW_FAILURE,
  FETCH_ROBOT_OVERVIEW_REQUEST,
  FETCH_ROBOT_OVERVIEW_SUCCESS,
  RobotOverviewActionTypes,
} from './types';

export function fetchRobotOverviewRequest(): RobotOverviewActionTypes {
  return {
    type: FETCH_ROBOT_OVERVIEW_REQUEST,
  };
}

export function fetchRobotOverviewSuccess(
  robotOverview: RobotOverview
): RobotOverviewActionTypes {
  return {
    type: FETCH_ROBOT_OVERVIEW_SUCCESS,
    payload: robotOverview,
  };
}

export function fetchRobotOverviewFailure(
  defaultMessage: DefaultResponse
): RobotOverviewActionTypes {
  return {
    type: FETCH_ROBOT_OVERVIEW_FAILURE,
    payload: defaultMessage,
  };
}
