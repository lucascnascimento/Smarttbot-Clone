import { RobotOverview, ServerErrorResponse } from '../../../types/types';
import {
  FETCH_ROBOT_OVERVIEW_REQUEST,
  FETCH_ROBOT_OVERVIEW_SUCCESS,
  FETCH_ROBOT_OVERVIEW_FAILURE,
  RobotOverviewState,
  RobotOverviewActionTypes,
} from './types';

const initialState: RobotOverviewState = {
  loadingRobotOverview: true,
  robotOverview: {} as RobotOverview,
  error: {} as ServerErrorResponse,
};

export default function RobotOverviewReducer(
  state = initialState,
  action: RobotOverviewActionTypes
): RobotOverviewState {
  switch (action.type) {
    case FETCH_ROBOT_OVERVIEW_REQUEST: {
      return { ...initialState, loadingRobotOverview: true };
    }

    case FETCH_ROBOT_OVERVIEW_SUCCESS: {
      return {
        loadingRobotOverview: false,
        robotOverview: action.payload,
        error: {} as ServerErrorResponse,
      };
    }

    case FETCH_ROBOT_OVERVIEW_FAILURE: {
      return {
        loadingRobotOverview: true,
        robotOverview: {} as RobotOverview,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
