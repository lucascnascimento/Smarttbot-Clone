import React, { ReactNode } from 'react';
import { MdClose } from 'react-icons/md';
import Backdrop from '../Backdrop';

import { Container, CloseIcon } from './styles';

interface ModalProps {
  handleClose: () => void;
  show: boolean;
  children: ReactNode;
}

// todo Prevent modal scroll

const Modal: React.FC<ModalProps> = ({
  handleClose,
  show,
  children,
}: ModalProps) => {
  return (
    <>
      <Backdrop visibility={show}>
        <Container show={show}>
          <CloseIcon onClick={handleClose}>
            <MdClose size={24} />
          </CloseIcon>
          {children}
        </Container>
      </Backdrop>
    </>
  );
};

export default Modal;
