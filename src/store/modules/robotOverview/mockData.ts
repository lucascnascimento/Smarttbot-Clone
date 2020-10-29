import { RobotOverview, ServerErrorResponse } from '../../../types/types';
import { RobotOverviewState } from './types';

export const initialState: RobotOverviewState = {
  loadingRobotOverview: true,
  robotOverview: {} as RobotOverview,
  error: {} as ServerErrorResponse,
};

// Robot overview success response data
export const overviewData: RobotOverview = {
  moviment_summary: 0,
  open_positions: 1000,
  papers: [
    { name: 'WING20', trasactions: 331 },
    { name: 'ABEV', trasactions: 455 },
    { name: 'ABEV', trasactions: 214 },
  ],
  transactions: 1000,
};

// Robot overview failure response data
export const errorResponse: ServerErrorResponse = {
  message: 'FAILURE',
  status: 404,
};
