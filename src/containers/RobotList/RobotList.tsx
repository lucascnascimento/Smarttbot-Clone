import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from '@material-ui/core';
import Robot from '../../components/Robot';
import { useTypedSelector } from '../../store/modules/rootReducer';
import {
  fetchRobotList,
  refreshRobotList,
} from '../../store/modules/robotList/asyncActions';
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
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(refreshRobotList(mode));
  }, [mode]);

  // Load more robots when scroll to bottom
  window.onscroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.scrollHeight
    ) {
      dispatch(fetchRobotList(mode, page + 1));
      setPage(page + 1);
    }
  }, 100);

  return (
    <>
      <Container>
        {robots.length > 0 && (
          <>
            {robots.map((robot) => (
              <Robot data={robot} key={robot.id} />
            ))}
          </>
        )}
      </Container>
      {loadingRobots && <Spinner size={32} color={theme.colors.green2} />}
    </>
  );
};

export default RobotList;
