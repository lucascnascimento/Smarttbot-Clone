/* eslint-disable @typescript-eslint/no-explicit-any */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from './types';

import { refreshRobotList, fetchRobotList } from './asyncActions';
import { modifiedRobotList, robotList } from './mockData';
import api from '../../../services/api';
import { RobotInstance, ServerErrorResponse } from '../../../types/types';

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
const mockSuccess = (data: RobotInstance[]) => ({
  status: 200,
  response: { data },
});
const mockError = () => ({ status: 500 });

describe('RobotList thunk action creator', () => {
  // Setup and teardown
  beforeEach(() => moxios.install(api));
  afterEach(() => moxios.uninstall(api));

  it('should dispatch the expected fetch actions on success', () => {
    const store = makeMockStore();

    // Get axios most recent request and mock the response
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(robotList));
    });

    // Expected actions to be dispacthed by the thunk
    const expectedActions = [
      { type: types.FETCH_ROBOT_LIST_REQUEST },
      { type: types.FETCH_ROBOT_LIST_SUCCESS, payload: modifiedRobotList },
    ];

    // Dispatch thunk action and assert the correct actions were dispatched
    return store.dispatch(fetchRobotList(true, 1) as any).then(() => {
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
      { type: types.FETCH_ROBOT_LIST_REQUEST },
      {
        type: types.FETCH_ROBOT_LIST_FAILURE,
        payload: {
          message: 'Request failed with status code 500',
          status: 500,
        } as ServerErrorResponse,
      },
    ];

    // Dispatch thunk action and assert the correct actions were dispatched
    return store.dispatch(fetchRobotList(true, 1) as any).then(() => {
      const actualActions = store.getActions();
      expect(actualActions).toEqual(expectedActions);
    });
  });

  // Refresh Actions test
  it('should dispatch the expected refresh actions on success', () => {
    const store = makeMockStore();

    // Get axios most recent request and mock the response
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(robotList));
    });

    // Expected actions to be dispacthed by the thunk
    const expectedActions = [
      { type: types.REFRESH_ROBOT_LIST_REQUEST },
      { type: types.REFRESH_ROBOT_LIST_SUCCESS, payload: modifiedRobotList },
    ];

    // Dispatch thunk action and assert the correct actions were dispatched
    return store.dispatch(refreshRobotList(true) as any).then(() => {
      const actualActions = store.getActions();
      expect(actualActions).toEqual(expectedActions);
    });
  });

  it('should dispatch the expected refresh actions on failure', () => {
    const store = makeMockStore();

    // Get axios most recent request and mock the response
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockError());
    });

    // Expected actions to be dispacthed by the thunk
    const expectedActions = [
      { type: types.REFRESH_ROBOT_LIST_REQUEST },
      {
        type: types.REFRESH_ROBOT_LIST_FAILURE,
        payload: {
          message: 'Request failed with status code 500',
          status: 500,
        } as ServerErrorResponse,
      },
    ];

    // Dispatch thunk action and assert the correct actions were dispatched
    return store.dispatch(refreshRobotList(true) as any).then(() => {
      const actualActions = store.getActions();
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
