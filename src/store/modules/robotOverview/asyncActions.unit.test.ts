import thunk, { ThunkDispatch } from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import moxios from 'moxios';
import { AnyAction } from 'redux';
import * as actions from './actions';
import * as types from './types';

import { DefaultResponse, RobotOverview } from '../../../types/types';
import { RobotOverviewState } from './types';
import { defaultResponse, initialState, overviewData } from './mockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
