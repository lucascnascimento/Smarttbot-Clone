// State type definition

export interface UIState {
  mode: boolean;
}

// Actions type definition

export const TOGGLE_MODE = 'TOGGLE_MODE';

interface ToggleMode {
  type: typeof TOGGLE_MODE;
}

export type UIActionTypes = ToggleMode;
