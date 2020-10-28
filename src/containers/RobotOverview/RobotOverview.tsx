import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../store/modules/rootReducer';
import { fetchRobotOverview } from '../../store/modules/robotOverview/asyncActions';
import { formatMoney } from '../../utils/utils';
import theme from '../../styles/themes/smarttBotDefault';
import Paper from './Paper';
import Spinner from '../../components/Spinner';

import {
  Container,
  Title,
  Summary,
  MovementSummary,
  Value,
  TotalTransactions,
  Separator,
  Papers,
  PapersList,
} from './styles';

// todo checar se o robotoverview está vindo completo

const RobotOverview: React.FC = () => {
  const dispatch = useDispatch();
  const robotOverview = useTypedSelector(
    (state) => state.robotOverview.robotOverview
  );
  const loadingRobotsOverview = useTypedSelector(
    (state) => state.robotOverview.loadingRobotOverview
  );

  useEffect(() => {
    dispatch(fetchRobotOverview());
  }, []);

  return (
    <Container>
      <Title>Resumo geral operações</Title>
      {loadingRobotsOverview ? (
        <Spinner size={32} color={theme.colors.green2} />
      ) : (
        <>
          <Summary>
            <MovementSummary profit={!(robotOverview.moviment_summary < 0)}>
              <h5>Resumo de movimentação</h5>
              <Value>{formatMoney(robotOverview.moviment_summary)}</Value>
              {/* <Value>{formatMoney(500)}</Value> */}
            </MovementSummary>
            <TotalTransactions>
              <h5>Total de transações realizadas</h5>
              <Value>{robotOverview.transactions}</Value>
              {/* <Value>{1000}</Value> */}
            </TotalTransactions>
          </Summary>
          <Separator />
          <Papers>
            <h5>Papéis negociados</h5>
            <PapersList>
              {robotOverview.papers.map((paper) => (
                <Paper paper={paper.name} transactions={paper.trasactions} />
              ))}
            </PapersList>
          </Papers>
        </>
      )}
    </Container>
  );
};

export default RobotOverview;
