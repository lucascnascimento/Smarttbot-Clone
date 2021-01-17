import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import state from '../../src/store';
import { RootState } from '../../src/store/modules/rootReducer';
import { RobotOverviewActionTypes } from '../../src/store/modules/robotOverview/types';
import { RobotListActionTypes } from '../../src/store/modules/robotList/types';
import { UIActionTypes } from '../../src/store/modules/ui/types';

import smarttBotDefault from '../../src/styles/themes/smarttBotDefault';

type DispatchExts = ThunkDispatch<
  RootState,
  undefined,
  RobotOverviewActionTypes & RobotListActionTypes & UIActionTypes
>;

const middlewares = [thunk];
const mockStore = configureStore<RootState, DispatchExts>(middlewares);

// TODO: Passar o estado inicial e o tipo de estado
const store = mockStore();

export const mockStateProvider = (element: ReactElement) => (
  <Provider store={store}>
    <ThemeProvider theme={smarttBotDefault}>{element}</ThemeProvider>
  </Provider>
);
