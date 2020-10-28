import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;

export const SpinnerStyle = styled(FaSpinner)`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  animation: ${rotate} 2s linear infinite;
`;
