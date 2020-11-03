import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { format } from 'date-fns';
import { RootState } from '../rootReducer';
import api from '../../../services/api';
import {
  fetchRobotListFailure,
  fetchRobotListSuccess,
  fetchRobotListRequest,
  refreshRobotListFailure,
  refreshRobotListSuccess,
  refreshRobotListRequest,
} from './actions';
import {
  RobotInstance,
  ServerErrorResponse,
  ServerResponse,
} from '../../../types/types';

// Format the movimentation date from robotInstances
function modifyRobotMovimentations(robots: RobotInstance[]): RobotInstance[] {
  return robots.reduce((robotAcc, robot) => {
    if (robot.movimentations.length > 0) {
      const updatedMov = robot.movimentations.map((mov) => ({
        ...mov,
        dateHour: `${format(new Date(mov.date), 'HH')}h`,
      }));

      return [...robotAcc, { ...robot, movimentations: updatedMov }];
    }
    return [...robotAcc, robot];
  }, [] as Array<RobotInstance>);
}

// Set the error response from the async call
function setErrorMessage(error: any) {
  const errorMsg = {} as ServerErrorResponse;

  if (error.response) {
    errorMsg.message = error.message;
    errorMsg.status = error.response.status;

    return errorMsg;
  }

  if (error.request) {
    errorMsg.message = error.message;
    errorMsg.status = error.request.status;

    return errorMsg;
  }

  errorMsg.message = 'Unknown Error';
  errorMsg.status = 600;

  return errorMsg;
}

// Thunk

/**
 * Fetches a robot list from remote server
 * @param mode Request Mode 0 - Simulated, 1 - Real
 * @param page Page number
 */
export const fetchRobotList = (
  mode: boolean,
  page: number
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    dispatch(fetchRobotListRequest());
    try {
      const res = await api.get<ServerResponse<RobotInstance[]>>('/robot', {
        headers: {
          limit: 4,
          mode,
          page,
        },
      });

      dispatch(fetchRobotListSuccess(modifyRobotMovimentations(res.data.data)));
    } catch (error) {
      dispatch(fetchRobotListFailure(setErrorMessage(error)));
    }
  };
};

/**
 * Refreshes the robot list
 * @param mode Request Mode 0 - Simulated, 1 - Real
 */
export const refreshRobotList = (
  mode: boolean
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    dispatch(refreshRobotListRequest());
    try {
      const res = await api.get<ServerResponse<RobotInstance[]>>('/robot', {
        headers: {
          limit: 4,
          mode,
          page: 1,
        },
      });

      dispatch(
        refreshRobotListSuccess(modifyRobotMovimentations(res.data.data))
      );
    } catch (error) {
      dispatch(refreshRobotListFailure(setErrorMessage(error)));
    }
  };
};
