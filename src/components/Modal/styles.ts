import { ButtonBase } from '@material-ui/core';
import styled from 'styled-components';
import { BaseContainer } from '../../styles/styles';

interface ContainerProps {
  show: boolean;
}

export const Container = styled(BaseContainer)<ContainerProps>`
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 0;
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 150;
  position: relative;
  margin: 0px;
  justify-content: right;

  @media ${(props) => props.theme.media.desktop} {
    height: fit-content;
    width: fit-content;
  }
`;

export const CloseIcon = styled(ButtonBase)`
  margin: 18px !important;

  & svg {
    color: ${(props) => props.theme.colors.green2};
  }
`;
