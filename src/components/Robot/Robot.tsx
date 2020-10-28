import React, { useEffect } from 'react';
import {
  MdArrowDropUp,
  MdArrowDropDown,
  MdKeyboardArrowDown,
  MdPause,
  MdMoreVert,
} from 'react-icons/md';
import { format } from 'date-fns';
import { RobotInstance } from '../../types/types';
import { formatMoney } from '../../utils/utils';
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
  LastPaperError,
} from './styles';

interface RobotProps {
  data: RobotInstance;
}

const Robot: React.FC<RobotProps> = ({ data }: RobotProps) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

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
              onClick={() => alert('To Do: Filtrar Saldo por dia, semana, mês')}
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
            <button
              type="button"
              onClick={() => alert('To Do: Post Request para pausar')}
            >
              <MdPause size={24} />
            </button>
            <button
              type="button"
              onClick={() =>
                alert(
                  'To Do: Abrir opções do Gráfico (Filtrar por dia, semana, mês)'
                )
              }
            >
              <MdMoreVert size={24} />
            </button>
          </div>
        </ChartHeader>
        <ChartContainer>
          <Chart />
        </ChartContainer>
      </RobotChart>
    </Container>
  );
};

export default Robot;
