import styled from 'styled-components';

export const BaseContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  /* padding: 28px; */
  border-radius: 10px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.03);
  margin: 12px;
  display: flex;
`;
