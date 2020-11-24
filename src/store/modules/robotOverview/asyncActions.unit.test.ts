/* eslint-disable @typescript-eslint/no-explicit-any */
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import moxios from 'moxios';
import { fetchRobotOverview } from './asyncActions';
import * as types from './types';

import { RobotOverview, ServerErrorResponse } from '../../../types/types';
import { overviewData } from './mockData';
import api from '../../../services/api';

// Configure mock store by applying middlewares
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Return an instance of the mocked store
const makeMockStore = (state = {}) => {
  return mockStore({
    ...mockStore,
    ...state,
  });
};

// Mock axios request responses.
const mockSuccess = (data: RobotOverview) => ({
  status: 200,
  response: { data },
});
const mockError = () => ({ status: 500 });

describe('Robot Overview thunk action creator', () => {
  // Setup and teardown
  beforeEach(() => moxios.install(api));
  afterEach(() => moxios.uninstall(api));

  it('should dispatch the expected fetch actions on success', () => {
    const store = makeMockStore();

    // Get axios most recent request and mock the response
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(overviewData));
    });

    // Expected actions to be dispacthed by the thunk
    const expectedActions = [
      { type: types.FETCH_ROBOT_OVERVIEW_REQUEST },
      { type: types.FETCH_ROBOT_OVERVIEW_SUCCESS, payload: overviewData },
    ];

    // Dispatch thunk action and assert the correct actions were dispatched
    return store.dispatch(fetchRobotOverview() as any).then(() => {
      const actualActions = store.getActions();
      expect(actualActions).toEqual(expectedActions);
    });
  });

  it('should dispatch the expected fetch actions on failure', () => {
    const store = makeMockStore();

    // Get axios most recent request and mock the response
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockError());
    });

    // Expected actions to be dispacthed by the thunk
    const expectedActions = [
      { type: types.FETCH_ROBOT_OVERVIEW_REQUEST },
      {
        type: types.FETCH_ROBOT_OVERVIEW_FAILURE,
        payload: {
          message: 'Request failed with status code 500',
          status: 500,
        } as ServerErrorResponse,
      },
    ];

    // Dispatch thunk action and assert the correct actions were dispatched
    return store.dispatch(fetchRobotOverview() as any).then(() => {
      const actualActions = store.getActions();
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
