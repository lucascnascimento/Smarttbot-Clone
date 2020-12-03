import styled from 'styled-components';
import Robot from '../../assets/images/robotLogo.png';

interface ToggleStateProps {
  toggleState: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Toggle = styled.div`
  touch-action: pan-x;
  cursor: pointer;
  border: 0;
  padding: 0;
  position: relative;
`;

export const ToggleTrack = styled.div<ToggleStateProps>`
  width: 56px;
  height: 24px;
  background: ${(props) =>
    props.toggleState
      ? `linear-gradient(
    130deg,
    rgba(19, 179, 157, 1) 0%,
    rgba(0, 97, 88, 1) 100%
  )`
      : `linear-gradient(
    130deg,
    ${props.theme.colors.gray2} 0%,
    ${props.theme.colors.gray4} 100%
  )`};
  border-radius: 14px;
  transition: background 2s;
`;

export const ToggleThumb = styled.div<ToggleStateProps>`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: white;
  position: absolute;
  top: 3px;
  left: ${(props) => (props.toggleState ? '34px' : '3px')};
  z-index: 4;
  transition: left 0.2s;
`;

export const LeftText = styled.span<ToggleStateProps>`
  font-weight: ${(props) => (!props.toggleState ? 'bold' : '500')};
  color: ${(props) => props.theme.colors.gray2};
  padding: 0 8px;
`;

export const RightText = styled.span<ToggleStateProps>`
  font-weight: ${(props) => (props.toggleState ? 'bold' : '500')};
  color: ${(props) => props.theme.colors.gray2};
  padding: 0 8px;
`;
