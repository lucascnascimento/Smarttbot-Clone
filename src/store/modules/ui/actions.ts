import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  TOGGLE_MODE,
  UIActionTypes,
} from './types';

export function toggleMode(): UIActionTypes {
  return {
    type: TOGGLE_MODE,
  };
}

export function openSidebar(): UIActionTypes {
  return {
    type: OPEN_SIDEBAR,
  };
}

export function closeSidebar(): UIActionTypes {
  return {
    type: CLOSE_SIDEBAR,
  };
}
