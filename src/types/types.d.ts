export interface Robot {
  id: number;
  title: string;
  running: number;
  updated_at: string;
  created_at: string;
  mode: number;
  stock_codes: string;
  strategy: string;
  initial_capital: number;
  number_trades: number;
  daily_balance: number;
  type: string;
}

export interface RobotPaper {
  robot_id: number;
  paper: string;
  position: number;
  type: number;
  paper_value: number;
  profit: number;
  id: number;
  created_at: string;
}

export interface Movimentations {
  date: string;
  value: number;
  dateHour?: string;
}

export interface RobotInstance extends Robot {
  last_paper: RobotPaper;
  movimentations: Array<Movimentations>;
  simulation: number;
}

export interface CreateRobot {
  title: string;
  mode: number;
  strategy_id: number;
  initial_capital: number;
  simulation: number;
  broker_id: number;
}

export interface Papers {
  name: string;
  trasactions: number;
}

export interface RobotOverview {
  moviment_summary: number;
  transactions: number;
  open_positions: number;
  papers: Array<Papers>;
}

export interface Broker {
  id: number;
  name: string;
}

export interface Strategy {
  id: number;
  name: string;
}

export interface ServerErrorResponse {
  message: string;
  status: number;
}

export interface ServerResponse<T> {
  message: string;
  data: T;
}

export const enum Mode {
  simulated,
  real,
}

export const enum SimulationType {
  Pessimista,
  Otimista,
}

export interface ModeInfo {
  id: number;
  name: string;
}
