import { produce } from 'immer';
import { RobotInstance, ServerErrorResponse } from '../../../types/types';
import {
  FETCH_ROBOT_LIST_REQUEST,
  FETCH_ROBOT_LIST_SUCCESS,
  FETCH_ROBOT_LIST_FAILURE,
  REFRESH_ROBOT_LIST_REQUEST,
  REFRESH_ROBOT_LIST_SUCCESS,
  REFRESH_ROBOT_LIST_FAILURE,
  RobotListActionTypes,
  RobotListState,
} from './types';

const initialState: RobotListState = {
  loadingRobotList: true,
  robots: [] as Array<RobotInstance>,
  error: {} as ServerErrorResponse,
};

export default function RobotListReducer(
  state = initialState,
  action: RobotListActionTypes
): RobotListState {
  switch (action.type) {
    case FETCH_ROBOT_LIST_REQUEST: {
      const nextState = produce(state, (draftState) => {
        return { ...draftState, loadingRobotList: true };
      });
      return nextState;
    }

    case FETCH_ROBOT_LIST_SUCCESS: {
      const nextState = produce(state, (draftState) => {
        return {
          loadingRobotList: false,
          error: {} as ServerErrorResponse,
          robots: draftState.robots.concat(action.payload),
        };
      });
      return nextState;
    }

    case FETCH_ROBOT_LIST_FAILURE: {
      return {
        loadingRobotList: true,
        robots: [] as Array<RobotInstance>,
        error: action.payload,
      };
    }

    case REFRESH_ROBOT_LIST_REQUEST: {
      const nextState = produce(state, (draftState) => {
        return { ...draftState, loadingRobotList: true };
      });
      return nextState;
    }

    case REFRESH_ROBOT_LIST_SUCCESS: {
      return {
        loadingRobotList: false,
        error: {} as ServerErrorResponse,
        robots: action.payload,
      };
    }

    case REFRESH_ROBOT_LIST_FAILURE: {
      return {
        loadingRobotList: true,
        robots: [] as Array<RobotInstance>,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
