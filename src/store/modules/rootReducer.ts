import { combineReducers } from 'redux';

import robotOverviewReducer from './robotOverview/reducer';

const rootReducer = combineReducers({ robotOverview: robotOverviewReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
