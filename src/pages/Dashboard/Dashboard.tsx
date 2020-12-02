import React from 'react';

import { Route } from 'react-router-dom';
import { AiFillSignal } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import Header from '../../containers/Header';
import Sidebar from '../../containers/Sidebar';
import RobotOverview from '../../containers/RobotOverview';
import AddNewRobot from '../../containers/AddNewRobot';
import RobotList from '../../containers/RobotList';

import { Body, Main } from './styles';
import { useTypedSelector } from '../../store/modules/rootReducer';
import ToggleButton from '../../components/ToggleButton';
import { toggleMode } from '../../store/modules/ui/actions';

const pages: React.FC = () => {
  const buttonState = useTypedSelector((state) => state.UI.mode);
  const dispatch = useDispatch();

  return (
    <Body>
      <Sidebar />
      <Main>
        <Route path="/" exact>
          <>
            <Header
              title="Análise Geral"
              subtitle="Principal"
              icon={<AiFillSignal size={22} />}
              rightSideComponent={
                <ToggleButton
                  leftText="Modo simulado"
                  rightText="Modo real"
                  state={buttonState}
                  action={() => dispatch(toggleMode())}
                />
              }
            />
            <RobotOverview />
            <AddNewRobot />
            <RobotList />
          </>
        </Route>
        <Route path="/plans">
          <>
            <Header title="Planos" icon={<MdShoppingCart size={22} />} />
            <div>Planos</div>
          </>
        </Route>
        <Route path="/profile">
          <>
            <Header title="Perfil" icon={<FaUserAlt size={22} />} />
            <div>Perfil</div>
          </>
        </Route>
        <Route path="/configurations">
          <>
            <Header title="Configurações" icon={<GoGear size={22} />} />
            <div>Configurações</div>
          </>
        </Route>
      </Main>
    </Body>
  );
};

export default pages;
