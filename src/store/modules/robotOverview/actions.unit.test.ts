import thunk, { ThunkDispatch } from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import moxios from 'moxios';
import { AnyAction } from 'redux';
import { DefaultResponse, RobotOverview } from '../../../types/types';
import { RobotOverviewState } from './types';
import * as actions from './actions';
import * as types from './types';
import { defaultResponse, initialState, overviewData } from './mockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create a robot overview request action', () => {
    const expectedAction = {
      type: types.FETCH_ROBOT_OVERVIEW_REQUEST,
    };
    expect(actions.fetchRobotOverviewRequest()).toEqual(expectedAction);
  });

  it('should create a robot overview sucess action', () => {
    const expectedAction = {
      type: types.FETCH_ROBOT_OVERVIEW_SUCCESS,
      payload: overviewData,
    };
    expect(actions.fetchRobotOverviewSuccess(overviewData)).toEqual(
      expectedAction
    );
  });

  it('should create a robot overview failure action', () => {
    const expectedAction = {
      type: types.FETCH_ROBOT_OVERVIEW_FAILURE,
      payload: defaultResponse,
    };
    expect(actions.fetchRobotOverviewFailure(defaultResponse)).toEqual(
      expectedAction
    );
  });
});

describe('async actions', () => {
  const mockError = (error: DefaultResponse) => ({
    status: 500,
    response: error,
  });

  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should fetchRobotOverviewSucess with server data on sucess', () => {
    const store = mockStore({ initialState });

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: overviewData,
      });
    });

    const expectedActions = [
      actions.fetchRobotOverviewRequest,
      actions.fetchRobotOverviewSuccess,
    ];

    store.dispatch(actions.fetchRobotOverview()).then(() => {
      const actual = store.getActions();
      console.log(actual);
      expect(actual).toEqual(expectedActions);
    });
  });
});
