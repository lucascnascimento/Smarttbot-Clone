import { ButtonBase } from '@material-ui/core';
import styled from 'styled-components';
import { BaseContainer } from '../../styles/styles';

interface StatusProps {
  running: boolean;
}

interface OverviewProps {
  netValue: boolean;
}

export const Container = styled(BaseContainer)`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 18px 28px;
  margin: 12px;

  & h2 {
    font-size: 1rem;
  }

  @media ${(props) => props.theme.media.desktop} {
    flex-direction: row;
    justify-content: space-between;
    margin: 0px;
  }
`;

export const RobotInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & span {
    font-size: 0.83rem;
    color: ${(props) => props.theme.colors.gray2};
  }

  @media ${(props) => props.theme.media.desktop} {
    min-width: 50%;
    margin-right: 6px;
  }
`;

export const RobotInfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RobotStrategy = styled.div`
  margin: 16px 0px 8px;

  & span {
    border: 1px solid ${(props) => props.theme.colors.gray1};
    padding: 1px 4px;
    border-radius: 2px;
    margin-right: 4px;
  }
`;

export const Status = styled.span<StatusProps>`
  font-size: 0.83rem;
  color: ${(props) => props.theme.colors.gray2};
  display: flex;
  align-items: center;

  span:first-child {
    background-color: ${(props) =>
      props.running ? props.theme.colors.green2 : props.theme.colors.warning};
    height: 8px;
    width: 8px;
    border-radius: 4px;
    margin: 0 4px;
  }
`;

export const Stock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.gray1};
  border-radius: 2px;
  padding: 16px;
  margin: 16px 0px;

  & > span {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.gray2};
    font-weight: bold;
  }

  div:first-of-type {
    & h2 {
      color: ${(props) => props.theme.colors.gray1};
    }

    & span {
      color: black;
    }
  }

  div:last-of-type {
    margin: auto 0;
    height: 100%;

    & span {
      display: block;
    }

    span:last-child {
      color: ${(props) => props.theme.colors.green2};
      display: flex;
      align-items: center;
      float: right;
    }
  }

  #paperError {
    padding: 12px 0;

    & span {
      color: ${(props) => props.theme.colors.gray1};
    }
  }
`;

export const LastPaperError = styled.div``;

export const Overview = styled.div<OverviewProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & svg {
    color: ${(props) => props.theme.colors.gray1};
  }

  div:first-of-type {
    & button {
      border: 0;
      background: transparent;
      display: flex;
      align-items: center;
    }

    & > span {
      font-size: 1rem;
      font-weight: bold;
      color: ${(props) =>
        props.netValue
          ? props.theme.colors.green2
          : props.theme.colors.warning};
    }
  }

  div:last-of-type {
    & span {
      display: block;
    }

    span:last-child {
      font-size: 1rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors.gray2};
      float: right;
    }
  }
`;

export const RobotChart = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.media.desktop} {
    min-width: 50%;
    margin-left: 6px;
  }
`;

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: flex-start;
  margin-top: 18px;

  @media ${(props) => props.theme.media.desktop} {
    margin-top: 0px;
  }

  div:first-of-type {
    & span {
      font-size: 0.83rem;
      color: ${(props) => props.theme.colors.gray2};
    }
  }

  div:last-of-type {
    display: flex;

    & svg {
      color: ${(props) => props.theme.colors.gray2};
    }
  }
`;

export const ChartContainer = styled.div`
  margin: 18px 0px 0px;
`;
