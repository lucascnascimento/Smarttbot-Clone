import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
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
import { formatErrorMessage, modifyRobotMovimentations } from '../utils';
import { RobotInstance, ServerResponse } from '../../../types/types';

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
      dispatch(fetchRobotListFailure(formatErrorMessage(error)));
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
      dispatch(refreshRobotListFailure(formatErrorMessage(error)));
    }
  };
};
