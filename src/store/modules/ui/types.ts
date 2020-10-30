// State type definition

export interface UIState {
  mode: boolean;
  sidebar: boolean;
}

// Actions type definition

export const TOGGLE_MODE = 'TOGGLE_MODE';
export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';

interface ToggleMode {
  type: typeof TOGGLE_MODE;
}

interface OpenSidebar {
  type: typeof OPEN_SIDEBAR;
}

interface CloseSidebar {
  type: typeof CLOSE_SIDEBAR;
}

export type UIActionTypes = ToggleMode | OpenSidebar | CloseSidebar;
