import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useTypedSelector } from '../../store/modules/rootReducer';
import { fetchRobotOverview } from '../../store/modules/robotOverview/asyncActions';
import { formatMoney } from '../../utils/utils';
import theme from '../../styles/themes/smarttBotDefault';
import Paper from './Paper';
import Spinner from '../../components/Spinner';
import { useWindowWidth } from '../../hooks/useWindowWidth';

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
  ShowMore,
} from './styles';
import SlideUpAndDown from '../../Animations/SlideUpAndDown';

/**
 * Display the robot overview
 * */
const RobotOverview: React.FC = () => {
  const dispatch = useDispatch();
  const robotOverview = useTypedSelector(
    (state) => state.robotOverview.robotOverview
  );
  const loadingRobotsOverview = useTypedSelector(
    (state) => state.robotOverview.loadingRobotOverview
  );
  const windowWidth = useWindowWidth();
  const [showMore, setShowMore] = useState(false);

  // Dispatch an action to fetch the robot overview info from the API
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
            </MovementSummary>
            <TotalTransactions>
              <h5>Total de transações realizadas</h5>
              <Value>{robotOverview.transactions}</Value>
            </TotalTransactions>
          </Summary>
          {robotOverview.papers.length > 0 && (
            <>
              <Separator />

              <SlideUpAndDown
                show={
                  (windowWidth < theme.width.tablet && showMore) ||
                  windowWidth > theme.width.tablet
                }
              >
                <Papers>
                  <h5>Papéis negociados</h5>
                  <PapersList>
                    {robotOverview.papers.map((paper) => (
                      <Paper
                        paper={paper.name}
                        transactions={paper.trasactions}
                      />
                    ))}
                  </PapersList>
                </Papers>
              </SlideUpAndDown>

              <ShowMore onClick={() => setShowMore(!showMore)} show={showMore}>
                Mostrar {showMore ? 'menos' : 'mais'}{' '}
                <MdKeyboardArrowDown size={22} />
              </ShowMore>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default RobotOverview;
