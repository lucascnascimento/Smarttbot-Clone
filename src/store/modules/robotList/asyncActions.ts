import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../rootReducer';
import api from '../../../services/api';
import {
  fetchRobotListFailure,
  fetchRobotListSuccess,
  fetchRobotListRequest,
} from './actions';
import {
  RobotInstance,
  ServerErrorResponse,
  ServerResponse,
} from '../../../types/types';

// Thunk

/**
 * Fetchs a robot list from remote server
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

      dispatch(fetchRobotListSuccess(res.data.data));
    } catch (error) {
      const errorMsg: ServerErrorResponse = {
        message: error.response.statusText,
        status: error.response.status,
      };

      dispatch(fetchRobotListFailure(errorMsg));
    }
  };
};
