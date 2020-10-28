import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.media.desktop} {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(2, 1fr);
  }
`;
