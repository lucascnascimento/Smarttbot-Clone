import styled from 'styled-components';

interface BackdropScreenProps {
  opacity: number;
  visibility: boolean;
}

export const BackdropScreen = styled.div<BackdropScreenProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 1);
  opacity: ${(props) => (props.visibility ? props.opacity : '0')};
  z-index: 100;
  visibility: ${(props) => (props.visibility ? 'visible' : 'hidden')};
`;
