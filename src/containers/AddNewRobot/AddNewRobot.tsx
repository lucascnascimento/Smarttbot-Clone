import React from 'react';
import { GoPlus } from 'react-icons/go';

import {
  Container,
  NewRobotButton,
  Icon,
  Separator,
  PlanContainer,
  Dot,
  UpgradePlan,
} from './styles';

const AddNewRobot: React.FC = () => {
  return (
    <Container>
      <NewRobotButton onClick={() => console.log('Open New Robot Modal ')}>
        <Icon>
          <GoPlus size={24} />
        </Icon>
        <div>
          <h2>Adicionar Novo Robô</h2>
          <span>
            Você possui <span>02 Robôs</span> disponíveis
          </span>
        </div>
      </NewRobotButton>
      <Separator />
      <PlanContainer>
        <p>
          <span>Plano Pro </span>
          <Dot />
          <UpgradePlan to="/planos"> Fazer Updgrade de Plano</UpgradePlan>
        </p>
      </PlanContainer>
    </Container>
  );
};

export default AddNewRobot;
