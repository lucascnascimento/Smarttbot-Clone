import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../rootReducer';
import api from '../../../services/api';
import {
  fetchRobotListFailure,
  fetchRobotListSuccess,
  fetchRobotListRequest,
} from './actions';

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
