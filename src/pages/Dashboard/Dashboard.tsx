import React from 'react';

import Header from '../../containers/Header';
import Navbar from '../../containers/Navbar';
import RobotOverview from '../../containers/RobotOverview';
import AddNewRobot from '../../containers/AddNewRobot';

import { Body, Main } from './styles';

const pages: React.FC = () => {
  return (
    <Body>
      <Navbar />
      <Main>
        <Header title="Análise Geral" subtitle="Principal" />
        <RobotOverview />
        <AddNewRobot />
      </Main>
    </Body>
  );
};

export default pages;
