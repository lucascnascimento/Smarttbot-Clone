export interface Robot {
  id: number;
  title: string;
  running: number;
  updated_at: string;
  mode: number;
  stock_codes: string;
  strategy: string;
  initial_capital: number;
  number_trades: number;
  daily_balance: number;
  type: string;
  created_at: string;
}

export interface RobotPaper {
  robot_id: number;
  paper: string;
  position: number;
  type: number;
  paper_value: number;
  profit: string;
  id: string;
  created_at: string;
}

export interface Movimentations {
  date: string;
  value: number;
}

export interface RobotList extends Robot {
  last_paper: RobotPaper;
  movimentations: Array<Movimentations>;
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
  transactions: number;
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

export interface DefaultResponse {
  message: string;
  data: any;
}
