import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../rootReducer';
import api from '../../../services/api';

import {
  fetchRobotOverviewFailure,
  fetchRobotOverviewRequest,
  fetchRobotOverviewSuccess,
} from './actions';
import { formatErrorMessage } from '../utils';
import { RobotOverview, ServerResponse } from '../../../types/types';

// Thunk

/**
 * Fetches the robot overview from remote server
 */
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
      dispatch(fetchRobotOverviewFailure(formatErrorMessage(error)));
    }
  };
};
