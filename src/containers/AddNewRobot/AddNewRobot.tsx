import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import Modal from '../../components/Modal';
import NewRobotForm from '../NewRobotForm';

import {
  Container,
  NewRobotButton,
  Icon,
  Separator,
  PlanContainer,
  Dot,
  UpgradePlan,
} from './styles';

/**
 * Container to show actions to add a robot and change plan.
 */
const AddNewRobot: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container>
        <NewRobotButton onClick={() => setShowModal(true)}>
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
            <UpgradePlan to="/plans"> Fazer Updgrade de Plano</UpgradePlan>
          </p>
        </PlanContainer>
      </Container>
      {showModal && (
        <Modal show={showModal} handleClose={() => setShowModal(false)}>
          <NewRobotForm />
        </Modal>
      )}
    </>
  );
};

export default AddNewRobot;
