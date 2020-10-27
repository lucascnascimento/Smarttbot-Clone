import { combineReducers } from 'redux';

import robotOverviewReducer from './robotOverview/reducer';
import robotListReducer from './robotList/reducer';
import UIReducer from './ui/reducer';

const rootReducer = combineReducers({
  robotOverview: robotOverviewReducer,
  robotList: robotListReducer,
  UI: UIReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
