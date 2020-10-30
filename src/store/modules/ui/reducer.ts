import { produce } from 'immer';
import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  TOGGLE_MODE,
  UIActionTypes,
  UIState,
} from './types';

const initialState: UIState = {
  mode: false,
  sidebar: false,
};

export default function RobotOverviewReducer(
  state = initialState,
  action: UIActionTypes
): UIState {
  switch (action.type) {
    case TOGGLE_MODE: {
      const nextState = produce(state, (draftState) => {
        draftState.mode = !draftState.mode;
      });
      return nextState;
    }

    case OPEN_SIDEBAR: {
      const nextState = produce(state, (draftState) => {
        return { ...draftState, sidebar: true };
      });
      return nextState;
    }

    case CLOSE_SIDEBAR: {
      const nextState = produce(state, (draftState) => {
        return { ...draftState, sidebar: false };
      });
      return nextState;
    }

    default: {
      return state;
    }
  }
}
