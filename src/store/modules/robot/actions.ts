import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../rootReducer';
import api from '../../../services/api';
import { DefaultResponse, RobotInstance } from '../../../types/types';
import {
  FETCH_ROBOT_LIST_REQUEST,
  FETCH_ROBOT_LIST_SUCCESS,
  FETCH_ROBOT_LIST_FAILURE,
  RobotListActionTypes,
} from './types';

export function fetchRobotListRequest(): RobotListActionTypes {
  return {
    type: FETCH_ROBOT_LIST_REQUEST,
  };
}

export function fetchRobotListSuccess(
  robotList: Array<RobotInstance>
): RobotListActionTypes {
  return {
    type: FETCH_ROBOT_LIST_SUCCESS,
    payload: robotList,
  };
}

export function fetchRobotListFailure(
  defaultMessage: DefaultResponse
): RobotListActionTypes {
  return {
    type: FETCH_ROBOT_LIST_FAILURE,
    payload: defaultMessage,
  };
}

// Thunk
export const fetchRobotList = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return (dispatch) => {
    dispatch(fetchRobotListRequest());
    api
      .get('/robot')
      .then((response) => {
        console.log(response.data);
        dispatch(fetchRobotListSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchRobotListFailure(error));
      });
  };
};
