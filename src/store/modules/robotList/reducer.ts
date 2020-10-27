import { DefaultResponse, RobotInstance } from '../../../types/types';
import {
  FETCH_ROBOT_LIST_REQUEST,
  FETCH_ROBOT_LIST_SUCCESS,
  FETCH_ROBOT_LIST_FAILURE,
  RobotListActionTypes,
  RobotListState,
} from './types';

const initialState: RobotListState = {
  loadingRobotList: true,
  robots: [] as Array<RobotInstance>,
  error: {} as DefaultResponse,
};

export default function RobotListReducer(
  state = initialState,
  action: RobotListActionTypes
): RobotListState {
  switch (action.type) {
    case FETCH_ROBOT_LIST_REQUEST: {
      return { ...initialState, loadingRobotList: true };
    }

    case FETCH_ROBOT_LIST_SUCCESS: {
      return {
        loadingRobotList: false,
        robots: action.payload,
        error: {} as DefaultResponse,
      };
    }

    case FETCH_ROBOT_LIST_FAILURE: {
      return {
        loadingRobotList: false,
        robots: [] as Array<RobotInstance>,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
