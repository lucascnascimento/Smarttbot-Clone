import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Robot from '../../components/Robot';
import { useTypedSelector } from '../../store/modules/rootReducer';
import { fetchRobotList } from '../../store/modules/robotList/asyncActions';
import Spinner from '../../components/Spinner';
import theme from '../../styles/themes/smarttBotDefault';

import { Container } from './styles';

/**
 * Display a list with robots instances info
 */
const RobotList: React.FC = () => {
  const dispatch = useDispatch();
  const robots = useTypedSelector((state) => state.robotList.robots);
  const loadingRobots = useTypedSelector(
    (state) => state.robotList.loadingRobotList
  );
  const mode = useTypedSelector((state) => state.UI.mode);

  useEffect(() => {
    dispatch(fetchRobotList(mode, 1));
  }, [mode]);

  return (
    <>
      <Container>
        {robots.map((robot) => (
          <Robot data={robot} />
        ))}
      </Container>
      {loadingRobots && <Spinner size={32} color={theme.colors.green2} />}
    </>
  );
};

export default RobotList;
