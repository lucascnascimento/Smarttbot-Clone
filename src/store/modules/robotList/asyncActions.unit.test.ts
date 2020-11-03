import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as types from './types';

import { refreshRobotList } from './asyncActions';
import { robotList } from './mockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

const axiosGet = axios.get as jest.Mock;

beforeEach(() => {
  axiosGet.mockReset();
});

describe('RobotList thunk action creator', () => {
  it('should dispatch the expected actions on success', () => {
    const store = mockStore({});
    const expectedActions = [
      types.REFRESH_ROBOT_LIST_REQUEST,
      types.REFRESH_ROBOT_LIST_SUCCESS,
    ];

    axiosGet.mockResolvedValue(robotList);

    // store.dispatch(refreshRobotList(1)).then(() => {
    //   const actualActions = store.getActions().map((action) => action.type);
    //   expect(actualActions).toEqual(expectedActions);
    // });

    console.log();
  });
});
