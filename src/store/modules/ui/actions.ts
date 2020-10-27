import { TOGGLE_MODE, UIActionTypes } from './types';

export function toggleMode(): UIActionTypes {
  return {
    type: TOGGLE_MODE,
  };
}
