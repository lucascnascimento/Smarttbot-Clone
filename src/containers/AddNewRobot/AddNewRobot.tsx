import React from 'react';
import { GoPlus } from 'react-icons/go';

import {
  Container,
  NewRobotContainer,
  Icon,
  PlanContainer,
  Dot,
} from './styles';

const AddNewRobot: React.FC = () => {
  return (
    <Container>
      <NewRobotContainer>
        <Icon>
          <GoPlus size={24} />
        </Icon>
        <button
          type="button"
          onClick={() => console.log('Open New Robot Modal ')}
        >
          <h2>Adicionar Novo Robô</h2>
          <span>
            Você possui <span>02 Robôs</span> disponíveis
          </span>
        </button>
      </NewRobotContainer>
      <PlanContainer>
        <p>
          <span>Plano Pro </span>
          <Dot />
          <span> Fazer Updgrade de Plano</span>
        </p>
      </PlanContainer>
    </Container>
  );
};

export default AddNewRobot;

// todo: updgrade de plano ir para nova página
// todo: Efeito de hover no botão
