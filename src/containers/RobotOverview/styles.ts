import styled from 'styled-components';
import { BaseContainer } from '../../styles/styles';

interface MovimentSummary {
  profit: boolean;
}

export const Container = styled(BaseContainer)`
  border-radius: 8px;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 1rem;
  margin: 18px 28px;
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Value = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const MovementSummary = styled.div<MovimentSummary>`
  margin: 18px 28px;
  color: ${(props) => props.theme.colors.gray2};
  text-align: center;

  @media ${(props) => props.theme.media.tablet} {
    text-align: unset;
  }

  & h5 {
    font-weight: 100;
  }

  ${Value} {
    color: ${(props) =>
      props.profit ? props.theme.colors.green2 : props.theme.colors.warning};
  }
`;

export const TotalTransactions = styled.div`
  margin: 18px 28px;
  color: ${(props) => props.theme.colors.gray2};
  text-align: center;

  & h5 {
    font-weight: 100;
  }

  ${Value} {
    color: black;
  }

  @media ${(props) => props.theme.media.tablet} {
    text-align: unset;

    ${Value} {
      float: right;
    }
  }
`;

export const Separator = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.colors.gray1};
  margin: 0px 28px;
`;

export const Papers = styled.div`
  & h5 {
    font-weight: 100;
    margin: 18px 28px 18px;
    color: ${(props) => props.theme.colors.gray2};
  }
`;

export const PapersList = styled.ul`
  margin: 18px 28px;

  @media ${(props) => props.theme.media.tablet} {
    display: grid;
    column-gap: 72px;
    grid-template-columns: repeat(2, 1fr);
  }
`;
