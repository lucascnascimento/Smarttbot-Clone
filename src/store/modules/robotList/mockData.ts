import { RobotInstance, ServerErrorResponse } from '../../../types/types';
import { RobotListState } from './types';

export const initialState: RobotListState = {
  loadingRobotList: true,
  robots: [] as Array<RobotInstance>,
  error: {} as ServerErrorResponse,
};

export const errorResponse: ServerErrorResponse = {
  message: 'FAILURE',
  status: 404,
};

export const robotList: Array<RobotInstance> = [
  {
    id: 1648753,
    title: 'Eu Metus LLC',
    running: 0,
    updated_at: '2020-08-04 18:04:51',
    mode: 0,
    simulation: 1,
    stock_codes: 'RAIL3',
    strategy: 'Hórus',
    initial_capital: 67692.5,
    number_trades: 506,
    daily_balance: 4.45,
    type: 'Normal',
    created_at: '2020-07-27 00:10:27',
    movimentations: [
      {
        date: '2020-10-25 04:47:03',
        value: 118,
      },
      {
        date: '2020-10-25 06:47:03',
        value: 163,
      },
      {
        date: '2020-10-25 08:47:03',
        value: 101,
      },
      {
        date: '2020-10-25 10:47:03',
        value: 15,
      },
      {
        date: '2020-10-25 12:47:03',
        value: 186,
      },
      {
        date: '2020-10-25 14:47:03',
        value: 153,
      },
      {
        date: '2020-10-25 16:47:03',
        value: 84,
      },
      {
        date: '2020-10-25 18:47:03',
        value: 162,
      },
      {
        date: '2020-10-25 20:47:03',
        value: 9,
      },
      {
        date: '2020-10-25 22:47:03',
        value: 138,
      },
      {
        date: '2020-10-26 00:47:03',
        value: 170,
      },
      {
        date: '2020-10-26 02:47:03',
        value: 187,
      },
      {
        date: '2020-10-26 04:47:03',
        value: 198,
      },
      {
        date: '2020-10-26 06:47:03',
        value: 79,
      },
      {
        date: '2020-10-26 08:47:03',
        value: 36,
      },
      {
        date: '2020-10-26 10:47:03',
        value: 72,
      },
      {
        date: '2020-10-26 12:47:03',
        value: 117,
      },
      {
        date: '2020-10-26 14:47:03',
        value: 185,
      },
      {
        date: '2020-10-26 16:47:03',
        value: 148,
      },
      {
        date: '2020-10-26 18:47:03',
        value: 44,
      },
      {
        date: '2020-10-26 20:47:03',
        value: 132,
      },
      {
        date: '2020-10-26 22:47:03',
        value: 195,
      },
      {
        date: '2020-10-27 00:47:03',
        value: 32,
      },
      {
        date: '2020-10-27 02:47:03',
        value: 72,
      },
      {
        date: '2020-10-27 04:47:03',
        value: 126,
      },
      {
        date: '2020-10-27 06:47:03',
        value: 63,
      },
      {
        date: '2020-10-27 08:47:03',
        value: 82,
      },
      {
        date: '2020-10-27 10:47:03',
        value: 195,
      },
      {
        date: '2020-10-27 12:47:03',
        value: 111,
      },
      {
        date: '2020-10-27 14:47:03',
        value: 92,
      },
    ],
    last_paper: {
      robot_id: 1648753,
      paper: 'WINBG20',
      position: 17,
      type: 1,
      paper_value: 84208.15,
      profit: 5.75,
      created_at: '2020-08-28 13:40:52',
      id: 113001,
    },
  },
  {
    id: 1648753,
    title: 'Eu Metus LLC',
    running: 0,
    updated_at: '2020-08-04 18:04:51',
    mode: 0,
    simulation: 1,
    stock_codes: 'RAIL3',
    strategy: 'Hórus',
    initial_capital: 67692.5,
    number_trades: 506,
    daily_balance: 4.45,
    type: 'Normal',
    created_at: '2020-07-27 00:10:27',
    movimentations: [
      {
        date: '2020-10-25 04:47:03',
        value: 118,
      },
      {
        date: '2020-10-25 06:47:03',
        value: 163,
      },
      {
        date: '2020-10-25 08:47:03',
        value: 101,
      },
      {
        date: '2020-10-25 10:47:03',
        value: 15,
      },
      {
        date: '2020-10-25 12:47:03',
        value: 186,
      },
    ],
    last_paper: {
      robot_id: 1648753,
      paper: 'WINBG20',
      position: 17,
      type: 1,
      paper_value: 84208.15,
      profit: 5.75,
      created_at: '2020-08-28 13:40:52',
      id: 113001,
    },
  },
];

export const refreshedRobotList: Array<RobotInstance> = [
  {
    id: 1648753,
    title: 'Eu Metus LLC',
    running: 0,
    updated_at: '2020-08-04 18:04:51',
    mode: 0,
    simulation: 1,
    stock_codes: 'RAIL3',
    strategy: 'Hórus',
    initial_capital: 67692.5,
    number_trades: 506,
    daily_balance: 4.45,
    type: 'Normal',
    created_at: '2020-07-27 00:10:27',
    movimentations: [
      {
        date: '2020-10-25 04:47:03',
        value: 118,
      },
    ],
    last_paper: {
      robot_id: 1648753,
      paper: 'WINBG20',
      position: 17,
      type: 1,
      paper_value: 84208.15,
      profit: 5.75,
      created_at: '2020-08-28 13:40:52',
      id: 113001,
    },
  },
  {
    id: 1648753,
    title: 'Eu Metus LLC',
    running: 0,
    updated_at: '2020-08-04 18:04:51',
    mode: 0,
    simulation: 1,
    stock_codes: 'RAIL3',
    strategy: 'Hórus',
    initial_capital: 67692.5,
    number_trades: 506,
    daily_balance: 4.45,
    type: 'Normal',
    created_at: '2020-07-27 00:10:27',
    movimentations: [
      {
        date: '2020-10-25 04:47:03',
        value: 118,
      },
    ],
    last_paper: {
      robot_id: 1648753,
      paper: 'WINBG20',
      position: 17,
      type: 1,
      paper_value: 84208.15,
      profit: 5.75,
      created_at: '2020-08-28 13:40:52',
      id: 113001,
    },
  },
];
