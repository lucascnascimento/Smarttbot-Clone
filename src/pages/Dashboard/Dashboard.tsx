import React from 'react';

import Header from '../../containers/Header';
import Sidebar from '../../containers/Sidebar';
import RobotOverview from '../../containers/RobotOverview';
import AddNewRobot from '../../containers/AddNewRobot';
import RobotList from '../../containers/RobotList';

import { Body, Main } from './styles';

const pages: React.FC = () => {
  return (
    <Body>
      <Sidebar />
      <Main>
        <Header title="Análise Geral" subtitle="Principal" />
        <RobotOverview />
        <AddNewRobot />
        <RobotList />
      </Main>
    </Body>
  );
};

export default pages;
