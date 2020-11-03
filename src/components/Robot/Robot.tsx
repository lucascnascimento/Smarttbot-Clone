import React, { useEffect, useState } from 'react';
import {
  MdArrowDropUp,
  MdArrowDropDown,
  MdKeyboardArrowDown,
  MdPause,
  MdMoreVert,
  MdPlayArrow,
} from 'react-icons/md';
import { format } from 'date-fns';
import { ButtonBase, CircularProgress } from '@material-ui/core';
import { Robot, RobotInstance, ServerResponse } from '../../types/types';
import { formatMoney } from '../../utils/utils';
import { usePut } from '../../hooks/usePut';

import Chart from './Chart';

import {
  Container,
  RobotInfo,
  RobotInfoHeader,
  RobotStrategy,
  Status,
  Stock,
  Overview,
  RobotChart,
  ChartHeader,
  ChartContainer,
} from './styles';

interface RobotProps {
  data: RobotInstance;
}

const RobotDashboard: React.FC<RobotProps> = ({ data }: RobotProps) => {
  const [running, setRunning] = useState(data.running);
  const [putRunning, loadingRunning, responseRunning, putErrorRunning] = usePut<
    ServerResponse<Robot>
  >();

  function handleRunning() {
    putRunning(`/robot/${data.id}/${running ? 'stop' : 'start'}`);
  }

  useEffect(() => {
    if (responseRunning.status === 200) {
      setRunning(running ? 0 : 1);
    }
  }, [putErrorRunning, responseRunning]);

  return (
    <Container>
      <RobotInfo>
        <RobotInfoHeader>
          <h2>{data.title}</h2>
          <Status running={!!data.running}>
            <span />
            <span> {!data.running ? 'Pausado' : 'Em execução'}</span>
          </Status>
        </RobotInfoHeader>
        <span>#{data.id}</span>
        <RobotStrategy>
          <span>{data.strategy}</span>
          <span>{data.stock_codes}</span>
          <span>{data.type}</span>
        </RobotStrategy>
        <Stock>
          {data.last_paper ? (
            <>
              <span>30</span>
              <div>
                <h2>{data.last_paper.paper}</h2>
                <span>{data.last_paper.type === 0 ? 'Compra' : 'Venda'}</span>
              </div>
              <div>
                <span>{data.last_paper.paper_value}</span>
                <span>
                  {data.last_paper.profit > 0 ? (
                    <MdArrowDropUp size={16} />
                  ) : (
                    <MdArrowDropDown size={16} />
                  )}{' '}
                  <span>{data.last_paper.profit}</span>
                </span>
              </div>
            </>
          ) : (
            <div id="paperError">
              <span>O último registro não está disponível</span>
            </div>
          )}
        </Stock>

        <Overview netValue={data.daily_balance > 0}>
          <div>
            <button
              type="button"
              onClick={() =>
                console.log('To Do: Filtrar Saldo por dia, semana, mês')
              }
            >
              <span>Saldo diário</span>
              <MdKeyboardArrowDown size={20} />
            </button>
            <span>{formatMoney(data.daily_balance)}</span>
          </div>
          <div>
            <span>Trades no dia</span>
            <span>{data.number_trades}</span>
          </div>
        </Overview>
      </RobotInfo>

      <RobotChart>
        <ChartHeader>
          <div>
            <h2>Histórico do dia</h2>
            <span>
              última atualização <span>&#8226;</span>{' '}
              {format(new Date(data.updated_at), 'HH:mm')}
            </span>
          </div>
          <div>
            <ButtonBase type="button" onClick={() => handleRunning()}>
              {loadingRunning ? (
                <CircularProgress size={16} />
              ) : running ? (
                <MdPause size={24} />
              ) : (
                <MdPlayArrow size={24} />
              )}
            </ButtonBase>
            <ButtonBase
              type="button"
              onClick={() =>
                console.log(
                  'To Do: Abrir opções do Gráfico (Filtrar por dia, semana, mês)'
                )
              }
            >
              <MdMoreVert size={24} />
            </ButtonBase>
          </div>
        </ChartHeader>
        <ChartContainer>
          <Chart data={data.movimentations} />
        </ChartContainer>
      </RobotChart>
    </Container>
  );
};

export default RobotDashboard;
