import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../rootReducer';
import api from '../../../services/api';

import {
  fetchRobotOverviewFailure,
  fetchRobotOverviewRequest,
  fetchRobotOverviewSuccess,
} from './actions';
import {
  RobotOverview,
  ServerErrorResponse,
  ServerResponse,
} from '../../../types/types';

// Thunk
export const fetchRobotOverview = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return async (dispatch) => {
    dispatch(fetchRobotOverviewRequest());
    try {
      const res = await api.get<ServerResponse<RobotOverview>>(
        '/robot/overview'
      );

      dispatch(fetchRobotOverviewSuccess(res.data.data));
    } catch (error) {
      try {
        const errorMsg: ServerErrorResponse = {
          message: error.response.statusText,
          status: error.response.status,
        };

        dispatch(fetchRobotOverviewFailure(errorMsg));
      } catch (err) {
        const errorMsg: ServerErrorResponse = {
          message: 'Bad request',
          status: 400,
        };

        dispatch(fetchRobotOverviewFailure(errorMsg));
      }
    }
  };
};
