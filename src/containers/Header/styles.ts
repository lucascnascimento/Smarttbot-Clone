import { ButtonBase } from '@material-ui/core';
import styled from 'styled-components';
import { BaseContainer } from '../../styles/styles';

export const Container = styled(BaseContainer)`
  flex-direction: row;
  padding: 16px 0px;
  justify-content: space-between;
  padding-right: 28px;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleIcon = styled.div`
  display: none;

  @media ${(props) => props.theme.media.desktop} {
    display: block;
    padding: 0 28px;
    & svg {
      color: ${(props) => props.theme.colors.green2};
    }
  }
`;

export const HamburguerMenu = styled(ButtonBase)`
  cursor: pointer;
  background: transparent;
  border: none;
  margin: 0 28px !important;

  & svg {
    color: ${(props) => props.theme.colors.green2};
  }

  @media ${(props) => props.theme.media.desktop} {
    display: none !important;
  }
`;

export const Separator = styled.div`
  display: none;

  @media ${(props) => props.theme.media.desktop} {
    height: 36px;
    width: 1px;
    background-color: ${(props) => props.theme.colors.gray1};
    display: block;
  }
`;

export const Title = styled.h1`
  font-size: 1rem;
  margin: 0;
  padding: 0 28px;

  span {
    font-weight: normal;

    &:nth-child(1) {
      color: ${(props) => props.theme.colors.gray1};
    }

    &:last-child {
      color: ${(props) => props.theme.colors.green1};
    }
  }
`;
