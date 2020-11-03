import React from 'react';

import { Route } from 'react-router-dom';
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
        <Route path="/" exact>
          <>
            <Header title="Análise Geral" subtitle="Principal" />
            <RobotOverview />
            <AddNewRobot />
            <RobotList />
          </>
        </Route>
        <Route path="/plans">
          <>
            <Header title="Planos" />
            <div>Planos</div>
          </>
        </Route>
        <Route path="/profile">
          <>
            <Header title="Perfil" />
            <div>Perfil</div>
          </>
        </Route>
        <Route path="/configurations">
          <>
            <Header title="Configurações" />
            <div>Configurações</div>
          </>
        </Route>
      </Main>
    </Body>
  );
};

export default pages;
