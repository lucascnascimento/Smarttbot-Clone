import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { format } from 'date-fns';
import { RootState } from '../rootReducer';
import api from '../../../services/api';
import {
  fetchRobotListFailure,
  fetchRobotListSuccess,
  fetchRobotListRequest,
} from './actions';
import { RobotInstance } from '../../../types/types';

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
  return (dispatch) => {
    dispatch(fetchRobotListRequest());
    api
      .get('/robot', {
        headers: {
          limit: 4,
          mode,
          page,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.message === 'SUCESS') {
          // response.data.data.map((robot: RobotInstance) =>
          //   console.log(format(new Date(robot.updated_at), 'H'))
          // );
          dispatch(fetchRobotListSuccess(response.data.data));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchRobotListFailure(error));
      });
  };
};
