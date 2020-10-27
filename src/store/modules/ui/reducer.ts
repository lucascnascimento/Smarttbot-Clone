import { produce } from 'immer';
import { TOGGLE_MODE, UIActionTypes, UIState } from './types';

const initialState: UIState = {
  mode: false,
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

    default: {
      return state;
    }
  }
}
