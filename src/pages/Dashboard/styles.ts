import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media ${(props) => props.theme.media.desktop} {
    flex-direction: row;
  }
`;

export const Main = styled.main`
  width: 100%;

  @media ${(props) => props.theme.media.desktop} {
    margin-left: 88px;
  }
`;
