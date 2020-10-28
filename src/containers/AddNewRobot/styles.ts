import styled from 'styled-components';
import { BaseContainer } from '../../styles/styles';

export const Container = styled(BaseContainer)`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 28px;

  @media ${(props) => props.theme.media.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NewRobotContainer = styled.div`
  display: flex;
  flex-direction: row;

  & button {
    border: 0;
    background: transparent;
    margin: 0 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & h2 {
      font-size: 1rem;
      margin: 0 auto;

      @media ${(props) => props.theme.media.tablet} {
        margin: 0;
      }
    }

    & > span {
      text-align: center;
      font-size: 0.83rem;
      color: ${(props) => props.theme.colors.gray2};

      & span {
        font-weight: bold;
        color: ${(props) => props.theme.colors.green2};
      }
    }
  }
`;

export const Icon = styled.div`
  min-width: 68px;
  min-height: 68px;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.gray1};
  border-radius: 8px;

  & svg {
    display: block;
    margin: 0 auto;
    color: ${(props) => props.theme.colors.gray1};
  }
`;

export const PlanContainer = styled.div`
  margin-top: 18px;

  @media ${(props) => props.theme.media.tablet} {
    margin-top: 10px;
  }

  & p {
    display: flex;
    align-items: center;
    font-size: 0.83rem;
    color: ${(props) => props.theme.colors.gray2};

    & span {
      display: inline-block;
    }

    span:last-of-type {
      color: ${(props) => props.theme.colors.green2};
    }
  }
`;

export const Dot = styled.div`
  height: 4px;
  width: 4px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.gray2};
  margin: 0 4px;
`;
