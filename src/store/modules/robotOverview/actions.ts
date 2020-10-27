import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../rootReducer';
import api from '../../../services/api';
import { DefaultResponse, RobotOverview } from '../../../types/types';
import {
  FETCH_ROBOT_OVERVIEW_FAILURE,
  FETCH_ROBOT_OVERVIEW_REQUEST,
  FETCH_ROBOT_OVERVIEW_SUCCESS,
  RobotOverviewActionTypes,
} from './types';

export function fetchRobotOverviewRequest(): RobotOverviewActionTypes {
  return {
    type: FETCH_ROBOT_OVERVIEW_REQUEST,
  };
}

export function fetchRobotOverviewSuccess(
  robotOverview: RobotOverview
): RobotOverviewActionTypes {
  return {
    type: FETCH_ROBOT_OVERVIEW_SUCCESS,
    payload: robotOverview,
  };
}

export function fetchRobotOverviewFailure(
  defaultMessage: DefaultResponse
): RobotOverviewActionTypes {
  return {
    type: FETCH_ROBOT_OVERVIEW_FAILURE,
    payload: defaultMessage,
  };
}

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
