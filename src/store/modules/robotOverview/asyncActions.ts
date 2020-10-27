import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../rootReducer';
import api from '../../../services/api';

import {
  fetchRobotOverviewFailure,
  fetchRobotOverviewRequest,
  fetchRobotOverviewSuccess,
} from './actions';

// Thunk
export const fetchRobotOverview = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return (dispatch) => {
    dispatch(fetchRobotOverviewRequest());
    api
      .get('/robot/overview')
      .then((response) => {
        console.log(response.data);
        dispatch(fetchRobotOverviewSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchRobotOverviewFailure(error));
      });
  };
};
