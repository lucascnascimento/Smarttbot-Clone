import styled from 'styled-components';
import { BaseContainer } from '../../styles/styles';

export const Container = styled(BaseContainer)`
  flex-direction: row;
  padding: 16px 0px;
  justify-content: space-between;
  padding-right: 28px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  padding: 0 28px;
  & svg {
    color: ${(props) => props.theme.colors.green2};
  }
`;

export const Separator = styled.div`
  height: 36px;
  width: 1px;
  background-color: ${(props) => props.theme.colors.gray1};
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
