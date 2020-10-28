import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.media.desktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 12px;
    row-gap: 12px;
    column-gap: 12px;
  }
`;
