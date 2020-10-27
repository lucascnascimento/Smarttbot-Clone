import styled from 'styled-components';

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

  & input {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
`;

export const ToggleTrack = styled.div<ToggleStateProps>`
  width: 64px;
  height: 29px;
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
  width: 24px;
  height: 24px;
  border-radius: 14px;
  background-color: white;
  position: absolute;
  top: 2px;
  left: ${(props) => (props.toggleState ? '37px' : '3px')};
  z-index: 2;
  transition: left 0.2s;
`;

export const LeftText = styled.span<ToggleStateProps>`
  font-weight: ${(props) => (!props.toggleState ? 'bold' : '500')};
  color: black;
  padding: 0 8px;
`;

export const RightText = styled.span<ToggleStateProps>`
  font-weight: ${(props) => (props.toggleState ? 'bold' : '500')};
  color: ${(props) => props.theme.colors.gray2};
  padding: 0 8px;
`;
